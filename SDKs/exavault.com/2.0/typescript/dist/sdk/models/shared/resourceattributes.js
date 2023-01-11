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
exports.ResourceAttributes = exports.ResourceAttributesTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ResourceAttributesTypeEnum;
(function (ResourceAttributesTypeEnum) {
    ResourceAttributesTypeEnum["File"] = "file";
    ResourceAttributesTypeEnum["Dir"] = "dir";
})(ResourceAttributesTypeEnum = exports.ResourceAttributesTypeEnum || (exports.ResourceAttributesTypeEnum = {}));
// ResourceAttributes
/**
 * Attributes of resource
**/
var ResourceAttributes = /** @class */ (function (_super) {
    __extends(ResourceAttributes, _super);
    function ResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessedAt" }),
        __metadata("design:type", Date)
    ], ResourceAttributes.prototype, "accessedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessedTime" }),
        __metadata("design:type", Number)
    ], ResourceAttributes.prototype, "accessedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], ResourceAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], ResourceAttributes.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdTime" }),
        __metadata("design:type", Number)
    ], ResourceAttributes.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], ResourceAttributes.prototype, "extension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileCount" }),
        __metadata("design:type", Number)
    ], ResourceAttributes.prototype, "fileCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], ResourceAttributes.prototype, "hash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ResourceAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ResourceAttributes.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previewable" }),
        __metadata("design:type", Boolean)
    ], ResourceAttributes.prototype, "previewable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ResourceAttributes.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ResourceAttributes.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], ResourceAttributes.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedTime" }),
        __metadata("design:type", Number)
    ], ResourceAttributes.prototype, "updatedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uploadDate" }),
        __metadata("design:type", Date)
    ], ResourceAttributes.prototype, "uploadDate", void 0);
    return ResourceAttributes;
}(utils_1.SpeakeasyBase));
exports.ResourceAttributes = ResourceAttributes;
