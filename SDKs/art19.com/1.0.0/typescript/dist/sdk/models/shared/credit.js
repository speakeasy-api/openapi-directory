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
exports.Credit = exports.CreditRelationships = exports.CreditRelationshipsPerson = exports.CreditAttributes = exports.CreditAttributesTypeEnum = exports.CreditAttributesCreditableTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var resourceidentifier_1 = require("./resourceidentifier");
var CreditAttributesCreditableTypeEnum;
(function (CreditAttributesCreditableTypeEnum) {
    CreditAttributesCreditableTypeEnum["Series"] = "Series";
    CreditAttributesCreditableTypeEnum["Season"] = "Season";
    CreditAttributesCreditableTypeEnum["Episode"] = "Episode";
})(CreditAttributesCreditableTypeEnum = exports.CreditAttributesCreditableTypeEnum || (exports.CreditAttributesCreditableTypeEnum = {}));
var CreditAttributesTypeEnum;
(function (CreditAttributesTypeEnum) {
    CreditAttributesTypeEnum["AnchorCredit"] = "AnchorCredit";
    CreditAttributesTypeEnum["AssociateProducerCredit"] = "AssociateProducerCredit";
    CreditAttributesTypeEnum["AuthorCredit"] = "AuthorCredit";
    CreditAttributesTypeEnum["CastCredit"] = "CastCredit";
    CreditAttributesTypeEnum["CoHostCredit"] = "CoHostCredit";
    CreditAttributesTypeEnum["ComposerCredit"] = "ComposerCredit";
    CreditAttributesTypeEnum["CreatorCredit"] = "CreatorCredit";
    CreditAttributesTypeEnum["Credit"] = "Credit";
    CreditAttributesTypeEnum["DirectorCredit"] = "DirectorCredit";
    CreditAttributesTypeEnum["EditorCredit"] = "EditorCredit";
    CreditAttributesTypeEnum["EngineerCredit"] = "EngineerCredit";
    CreditAttributesTypeEnum["ExecutiveProducerCredit"] = "ExecutiveProducerCredit";
    CreditAttributesTypeEnum["GuestCoHostCredit"] = "GuestCoHostCredit";
    CreditAttributesTypeEnum["GuestCredit"] = "GuestCredit";
    CreditAttributesTypeEnum["GuestHostCredit"] = "GuestHostCredit";
    CreditAttributesTypeEnum["HeadWriterCredit"] = "HeadWriterCredit";
    CreditAttributesTypeEnum["HostCredit"] = "HostCredit";
    CreditAttributesTypeEnum["ProducerCredit"] = "ProducerCredit";
    CreditAttributesTypeEnum["ReporterCredit"] = "ReporterCredit";
    CreditAttributesTypeEnum["SeniorProducerCredit"] = "SeniorProducerCredit";
    CreditAttributesTypeEnum["SidekickCredit"] = "SidekickCredit";
    CreditAttributesTypeEnum["VideoProducerCredit"] = "VideoProducerCredit";
    CreditAttributesTypeEnum["WriterCredit"] = "WriterCredit";
})(CreditAttributesTypeEnum = exports.CreditAttributesTypeEnum || (exports.CreditAttributesTypeEnum = {}));
var CreditAttributes = /** @class */ (function (_super) {
    __extends(CreditAttributes, _super);
    function CreditAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], CreditAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditable_id" }),
        __metadata("design:type", String)
    ], CreditAttributes.prototype, "creditableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditable_type" }),
        __metadata("design:type", String)
    ], CreditAttributes.prototype, "creditableType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], CreditAttributes.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreditAttributes.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], CreditAttributes.prototype, "updatedAt", void 0);
    return CreditAttributes;
}(utils_1.SpeakeasyBase));
exports.CreditAttributes = CreditAttributes;
var CreditRelationshipsPerson = /** @class */ (function (_super) {
    __extends(CreditRelationshipsPerson, _super);
    function CreditRelationshipsPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], CreditRelationshipsPerson.prototype, "data", void 0);
    return CreditRelationshipsPerson;
}(utils_1.SpeakeasyBase));
exports.CreditRelationshipsPerson = CreditRelationshipsPerson;
var CreditRelationships = /** @class */ (function (_super) {
    __extends(CreditRelationships, _super);
    function CreditRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=person" }),
        __metadata("design:type", CreditRelationshipsPerson)
    ], CreditRelationships.prototype, "person", void 0);
    return CreditRelationships;
}(utils_1.SpeakeasyBase));
exports.CreditRelationships = CreditRelationships;
// Credit
/**
 * A credit links a specific person to a series, season, or episode in a specific role.
 *
**/
var Credit = /** @class */ (function (_super) {
    __extends(Credit, _super);
    function Credit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", CreditAttributes)
    ], Credit.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Credit.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", CreditRelationships)
    ], Credit.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Credit.prototype, "type", void 0);
    return Credit;
}(utils_1.SpeakeasyBase));
exports.Credit = Credit;
