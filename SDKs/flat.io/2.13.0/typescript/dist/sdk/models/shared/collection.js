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
exports.Collection = exports.CollectionCapabilities = void 0;
var utils_1 = require("../../../internal/utils");
var resourcecollaborator_1 = require("./resourcecollaborator");
var collectionprivacyenum_1 = require("./collectionprivacyenum");
var resourcerights_1 = require("./resourcerights");
var collectiontypeenum_1 = require("./collectiontypeenum");
var userpublicsummary_1 = require("./userpublicsummary");
// CollectionCapabilities
/**
 * Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.
**/
var CollectionCapabilities = /** @class */ (function (_super) {
    __extends(CollectionCapabilities, _super);
    function CollectionCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canAddScores" }),
        __metadata("design:type", Boolean)
    ], CollectionCapabilities.prototype, "canAddScores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canDelete" }),
        __metadata("design:type", Boolean)
    ], CollectionCapabilities.prototype, "canDelete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canDeleteScores" }),
        __metadata("design:type", Boolean)
    ], CollectionCapabilities.prototype, "canDeleteScores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canEdit" }),
        __metadata("design:type", Boolean)
    ], CollectionCapabilities.prototype, "canEdit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canShare" }),
        __metadata("design:type", Boolean)
    ], CollectionCapabilities.prototype, "canShare", void 0);
    return CollectionCapabilities;
}(utils_1.SpeakeasyBase));
exports.CollectionCapabilities = CollectionCapabilities;
// Collection
/**
 * Collection of scores
**/
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app" }),
        __metadata("design:type", String)
    ], Collection.prototype, "app", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capabilities" }),
        __metadata("design:type", CollectionCapabilities)
    ], Collection.prototype, "capabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collaborators", elemType: resourcecollaborator_1.ResourceCollaborator }),
        __metadata("design:type", Array)
    ], Collection.prototype, "collaborators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collections" }),
        __metadata("design:type", Array)
    ], Collection.prototype, "collections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], Collection.prototype, "creationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlUrl" }),
        __metadata("design:type", String)
    ], Collection.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Collection.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], Collection.prototype, "privacy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rights" }),
        __metadata("design:type", resourcerights_1.ResourceRights)
    ], Collection.prototype, "rights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharingKey" }),
        __metadata("design:type", String)
    ], Collection.prototype, "sharingKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Collection.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Collection.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", userpublicsummary_1.UserPublicSummary)
    ], Collection.prototype, "user", void 0);
    return Collection;
}(utils_1.SpeakeasyBase));
exports.Collection = Collection;
