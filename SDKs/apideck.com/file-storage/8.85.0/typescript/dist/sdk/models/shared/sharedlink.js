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
exports.SharedLinkInput = exports.SharedLinkOutput = exports.SharedLinkScopeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var sharedlinktarget_1 = require("./sharedlinktarget");
var SharedLinkScopeEnum;
(function (SharedLinkScopeEnum) {
    SharedLinkScopeEnum["Public"] = "public";
    SharedLinkScopeEnum["Company"] = "company";
})(SharedLinkScopeEnum = exports.SharedLinkScopeEnum || (exports.SharedLinkScopeEnum = {}));
var SharedLinkOutput = /** @class */ (function (_super) {
    __extends(SharedLinkOutput, _super);
    function SharedLinkOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], SharedLinkOutput.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], SharedLinkOutput.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expires_at" }),
        __metadata("design:type", Date)
    ], SharedLinkOutput.prototype, "expiresAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password_protected" }),
        __metadata("design:type", Boolean)
    ], SharedLinkOutput.prototype, "passwordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], SharedLinkOutput.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", sharedlinktarget_1.SharedLinkTarget)
    ], SharedLinkOutput.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], SharedLinkOutput.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SharedLinkOutput.prototype, "url", void 0);
    return SharedLinkOutput;
}(utils_1.SpeakeasyBase));
exports.SharedLinkOutput = SharedLinkOutput;
var SharedLinkInput = /** @class */ (function (_super) {
    __extends(SharedLinkInput, _super);
    function SharedLinkInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], SharedLinkInput.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], SharedLinkInput.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], SharedLinkInput.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_id" }),
        __metadata("design:type", String)
    ], SharedLinkInput.prototype, "targetId", void 0);
    return SharedLinkInput;
}(utils_1.SpeakeasyBase));
exports.SharedLinkInput = SharedLinkInput;
