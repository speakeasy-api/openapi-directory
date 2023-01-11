"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificationInclusion = exports.ClassificationInclusionRelationships = exports.ClassificationInclusionRelationshipsClassification = exports.ClassificationInclusionAttributes = exports.ClassificationInclusionAttributesClassifiedTypeEnum = exports.ClassificationInclusionAttributesClassificationTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var resourceidentifier_1 = require("./resourceidentifier");
var ClassificationInclusionAttributesClassificationTypeEnum;
(function (ClassificationInclusionAttributesClassificationTypeEnum) {
    ClassificationInclusionAttributesClassificationTypeEnum["AlternateFeedType"] = "AlternateFeedType";
    ClassificationInclusionAttributesClassificationTypeEnum["Genre"] = "Genre";
    ClassificationInclusionAttributesClassificationTypeEnum["Industry"] = "Industry";
    ClassificationInclusionAttributesClassificationTypeEnum["Language"] = "Language";
    ClassificationInclusionAttributesClassificationTypeEnum["MediaRating"] = "MediaRating";
})(ClassificationInclusionAttributesClassificationTypeEnum = exports.ClassificationInclusionAttributesClassificationTypeEnum || (exports.ClassificationInclusionAttributesClassificationTypeEnum = {}));
var ClassificationInclusionAttributesClassifiedTypeEnum;
(function (ClassificationInclusionAttributesClassifiedTypeEnum) {
    ClassificationInclusionAttributesClassifiedTypeEnum["Series"] = "Series";
    ClassificationInclusionAttributesClassifiedTypeEnum["Season"] = "Season";
    ClassificationInclusionAttributesClassifiedTypeEnum["Episode"] = "Episode";
})(ClassificationInclusionAttributesClassifiedTypeEnum = exports.ClassificationInclusionAttributesClassifiedTypeEnum || (exports.ClassificationInclusionAttributesClassifiedTypeEnum = {}));
var ClassificationInclusionAttributes = /** @class */ (function (_super) {
    __extends(ClassificationInclusionAttributes, _super);
    function ClassificationInclusionAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification_id" }),
        __metadata("design:type", String)
    ], ClassificationInclusionAttributes.prototype, "classificationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification_type" }),
        __metadata("design:type", String)
    ], ClassificationInclusionAttributes.prototype, "classificationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classified_id" }),
        __metadata("design:type", String)
    ], ClassificationInclusionAttributes.prototype, "classifiedId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classified_type" }),
        __metadata("design:type", String)
    ], ClassificationInclusionAttributes.prototype, "classifiedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ClassificationInclusionAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], ClassificationInclusionAttributes.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ClassificationInclusionAttributes.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ClassificationInclusionAttributes.prototype, "updatedAt", void 0);
    return ClassificationInclusionAttributes;
}(utils_1.SpeakeasyBase));
exports.ClassificationInclusionAttributes = ClassificationInclusionAttributes;
var ClassificationInclusionRelationshipsClassification = /** @class */ (function (_super) {
    __extends(ClassificationInclusionRelationshipsClassification, _super);
    function ClassificationInclusionRelationshipsClassification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], ClassificationInclusionRelationshipsClassification.prototype, "data", void 0);
    return ClassificationInclusionRelationshipsClassification;
}(utils_1.SpeakeasyBase));
exports.ClassificationInclusionRelationshipsClassification = ClassificationInclusionRelationshipsClassification;
var ClassificationInclusionRelationships = /** @class */ (function (_super) {
    __extends(ClassificationInclusionRelationships, _super);
    function ClassificationInclusionRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification" }),
        __metadata("design:type", ClassificationInclusionRelationshipsClassification)
    ], ClassificationInclusionRelationships.prototype, "classification", void 0);
    return ClassificationInclusionRelationships;
}(utils_1.SpeakeasyBase));
exports.ClassificationInclusionRelationships = ClassificationInclusionRelationships;
// ClassificationInclusion
/**
 * Connects a Classification with a classified item like a Series, Season or Episode.
 *
**/
var ClassificationInclusion = /** @class */ (function (_super) {
    __extends(ClassificationInclusion, _super);
    function ClassificationInclusion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", ClassificationInclusionAttributes)
    ], ClassificationInclusion.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ClassificationInclusion.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", ClassificationInclusionRelationships)
    ], ClassificationInclusion.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ClassificationInclusion.prototype, "type", void 0);
    return ClassificationInclusion;
}(utils_1.SpeakeasyBase));
exports.ClassificationInclusion = ClassificationInclusion;
