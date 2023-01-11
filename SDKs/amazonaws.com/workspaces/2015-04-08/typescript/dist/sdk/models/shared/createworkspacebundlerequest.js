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
exports.CreateWorkspaceBundleRequest = void 0;
var utils_1 = require("../../../internal/utils");
var computetype_1 = require("./computetype");
var rootstorage_1 = require("./rootstorage");
var tag_1 = require("./tag");
var userstorage_1 = require("./userstorage");
var CreateWorkspaceBundleRequest = /** @class */ (function (_super) {
    __extends(CreateWorkspaceBundleRequest, _super);
    function CreateWorkspaceBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BundleDescription" }),
        __metadata("design:type", String)
    ], CreateWorkspaceBundleRequest.prototype, "bundleDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BundleName" }),
        __metadata("design:type", String)
    ], CreateWorkspaceBundleRequest.prototype, "bundleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ComputeType" }),
        __metadata("design:type", computetype_1.ComputeType)
    ], CreateWorkspaceBundleRequest.prototype, "computeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ImageId" }),
        __metadata("design:type", String)
    ], CreateWorkspaceBundleRequest.prototype, "imageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RootStorage" }),
        __metadata("design:type", rootstorage_1.RootStorage)
    ], CreateWorkspaceBundleRequest.prototype, "rootStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], CreateWorkspaceBundleRequest.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UserStorage" }),
        __metadata("design:type", userstorage_1.UserStorage)
    ], CreateWorkspaceBundleRequest.prototype, "userStorage", void 0);
    return CreateWorkspaceBundleRequest;
}(utils_1.SpeakeasyBase));
exports.CreateWorkspaceBundleRequest = CreateWorkspaceBundleRequest;
