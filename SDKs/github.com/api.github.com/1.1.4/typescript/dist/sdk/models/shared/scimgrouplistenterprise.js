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
exports.ScimGroupListEnterprise = exports.ScimGroupListEnterpriseResources = exports.ScimGroupListEnterpriseResourcesMeta = exports.ScimGroupListEnterpriseResourcesMembers = void 0;
var utils_1 = require("../../../internal/utils");
var ScimGroupListEnterpriseResourcesMembers = /** @class */ (function (_super) {
    __extends(ScimGroupListEnterpriseResourcesMembers, _super);
    function ScimGroupListEnterpriseResourcesMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=$ref" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResourcesMembers.prototype, "dollarRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResourcesMembers.prototype, "display", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResourcesMembers.prototype, "value", void 0);
    return ScimGroupListEnterpriseResourcesMembers;
}(utils_1.SpeakeasyBase));
exports.ScimGroupListEnterpriseResourcesMembers = ScimGroupListEnterpriseResourcesMembers;
var ScimGroupListEnterpriseResourcesMeta = /** @class */ (function (_super) {
    __extends(ScimGroupListEnterpriseResourcesMeta, _super);
    function ScimGroupListEnterpriseResourcesMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResourcesMeta.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastModified" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResourcesMeta.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResourcesMeta.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResourcesMeta.prototype, "resourceType", void 0);
    return ScimGroupListEnterpriseResourcesMeta;
}(utils_1.SpeakeasyBase));
exports.ScimGroupListEnterpriseResourcesMeta = ScimGroupListEnterpriseResourcesMeta;
var ScimGroupListEnterpriseResources = /** @class */ (function (_super) {
    __extends(ScimGroupListEnterpriseResources, _super);
    function ScimGroupListEnterpriseResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResources.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResources.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScimGroupListEnterpriseResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: ScimGroupListEnterpriseResourcesMembers }),
        __metadata("design:type", Array)
    ], ScimGroupListEnterpriseResources.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ScimGroupListEnterpriseResourcesMeta)
    ], ScimGroupListEnterpriseResources.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimGroupListEnterpriseResources.prototype, "schemas", void 0);
    return ScimGroupListEnterpriseResources;
}(utils_1.SpeakeasyBase));
exports.ScimGroupListEnterpriseResources = ScimGroupListEnterpriseResources;
var ScimGroupListEnterprise = /** @class */ (function (_super) {
    __extends(ScimGroupListEnterprise, _super);
    function ScimGroupListEnterprise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Resources", elemType: ScimGroupListEnterpriseResources }),
        __metadata("design:type", Array)
    ], ScimGroupListEnterprise.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], ScimGroupListEnterprise.prototype, "itemsPerPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimGroupListEnterprise.prototype, "schemas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], ScimGroupListEnterprise.prototype, "startIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalResults" }),
        __metadata("design:type", Number)
    ], ScimGroupListEnterprise.prototype, "totalResults", void 0);
    return ScimGroupListEnterprise;
}(utils_1.SpeakeasyBase));
exports.ScimGroupListEnterprise = ScimGroupListEnterprise;
