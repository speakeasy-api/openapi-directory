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
exports.Resource = exports.ResourceTypeEnum = exports.ResourceRelationships = exports.ResourceRelationshipsShare = exports.ResourceRelationshipsShareData = exports.ResourceRelationshipsParentResource = exports.ResourceRelationshipsParentResourceData = exports.ResourceRelationshipsNotifications = exports.ResourceRelationshipsNotificationsData = exports.ResourceRelationshipsDirectFile = exports.ResourceRelationshipsDirectFileData = void 0;
var utils_1 = require("../../../internal/utils");
var resourceattributes_1 = require("./resourceattributes");
var ResourceRelationshipsDirectFileData = /** @class */ (function (_super) {
    __extends(ResourceRelationshipsDirectFileData, _super);
    function ResourceRelationshipsDirectFileData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ResourceRelationshipsDirectFileData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ResourceRelationshipsDirectFileData.prototype, "type", void 0);
    return ResourceRelationshipsDirectFileData;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationshipsDirectFileData = ResourceRelationshipsDirectFileData;
var ResourceRelationshipsDirectFile = /** @class */ (function (_super) {
    __extends(ResourceRelationshipsDirectFile, _super);
    function ResourceRelationshipsDirectFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ResourceRelationshipsDirectFileData)
    ], ResourceRelationshipsDirectFile.prototype, "data", void 0);
    return ResourceRelationshipsDirectFile;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationshipsDirectFile = ResourceRelationshipsDirectFile;
var ResourceRelationshipsNotificationsData = /** @class */ (function (_super) {
    __extends(ResourceRelationshipsNotificationsData, _super);
    function ResourceRelationshipsNotificationsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ResourceRelationshipsNotificationsData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ResourceRelationshipsNotificationsData.prototype, "type", void 0);
    return ResourceRelationshipsNotificationsData;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationshipsNotificationsData = ResourceRelationshipsNotificationsData;
var ResourceRelationshipsNotifications = /** @class */ (function (_super) {
    __extends(ResourceRelationshipsNotifications, _super);
    function ResourceRelationshipsNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ResourceRelationshipsNotificationsData)
    ], ResourceRelationshipsNotifications.prototype, "data", void 0);
    return ResourceRelationshipsNotifications;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationshipsNotifications = ResourceRelationshipsNotifications;
var ResourceRelationshipsParentResourceData = /** @class */ (function (_super) {
    __extends(ResourceRelationshipsParentResourceData, _super);
    function ResourceRelationshipsParentResourceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ResourceRelationshipsParentResourceData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ResourceRelationshipsParentResourceData.prototype, "type", void 0);
    return ResourceRelationshipsParentResourceData;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationshipsParentResourceData = ResourceRelationshipsParentResourceData;
var ResourceRelationshipsParentResource = /** @class */ (function (_super) {
    __extends(ResourceRelationshipsParentResource, _super);
    function ResourceRelationshipsParentResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ResourceRelationshipsParentResourceData)
    ], ResourceRelationshipsParentResource.prototype, "data", void 0);
    return ResourceRelationshipsParentResource;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationshipsParentResource = ResourceRelationshipsParentResource;
var ResourceRelationshipsShareData = /** @class */ (function (_super) {
    __extends(ResourceRelationshipsShareData, _super);
    function ResourceRelationshipsShareData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ResourceRelationshipsShareData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ResourceRelationshipsShareData.prototype, "type", void 0);
    return ResourceRelationshipsShareData;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationshipsShareData = ResourceRelationshipsShareData;
var ResourceRelationshipsShare = /** @class */ (function (_super) {
    __extends(ResourceRelationshipsShare, _super);
    function ResourceRelationshipsShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ResourceRelationshipsShareData)
    ], ResourceRelationshipsShare.prototype, "data", void 0);
    return ResourceRelationshipsShare;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationshipsShare = ResourceRelationshipsShare;
var ResourceRelationships = /** @class */ (function (_super) {
    __extends(ResourceRelationships, _super);
    function ResourceRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directFile" }),
        __metadata("design:type", ResourceRelationshipsDirectFile)
    ], ResourceRelationships.prototype, "directFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notifications", elemType: ResourceRelationshipsNotifications }),
        __metadata("design:type", Array)
    ], ResourceRelationships.prototype, "notifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentResource" }),
        __metadata("design:type", ResourceRelationshipsParentResource)
    ], ResourceRelationships.prototype, "parentResource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share" }),
        __metadata("design:type", ResourceRelationshipsShare)
    ], ResourceRelationships.prototype, "share", void 0);
    return ResourceRelationships;
}(utils_1.SpeakeasyBase));
exports.ResourceRelationships = ResourceRelationships;
var ResourceTypeEnum;
(function (ResourceTypeEnum) {
    ResourceTypeEnum["Resource"] = "resource";
})(ResourceTypeEnum = exports.ResourceTypeEnum || (exports.ResourceTypeEnum = {}));
// Resource
/**
 * All properties of the resource.
**/
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", resourceattributes_1.ResourceAttributes)
    ], Resource.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Resource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", ResourceRelationships)
    ], Resource.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Resource.prototype, "type", void 0);
    return Resource;
}(utils_1.SpeakeasyBase));
exports.Resource = Resource;
