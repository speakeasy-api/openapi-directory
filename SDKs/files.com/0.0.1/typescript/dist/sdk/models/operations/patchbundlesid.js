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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchBundlesIdResponse = exports.PatchBundlesIdRequest = exports.PatchBundlesIdRequestBody = exports.PatchBundlesIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchBundlesIdPathParams = /** @class */ (function (_super) {
    __extends(PatchBundlesIdPathParams, _super);
    function PatchBundlesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdPathParams.prototype, "id", void 0);
    return PatchBundlesIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchBundlesIdPathParams = PatchBundlesIdPathParams;
var PatchBundlesIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchBundlesIdRequestBody, _super);
    function PatchBundlesIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=clickwrap_id" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdRequestBody.prototype, "clickwrapId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=code" }),
        __metadata("design:type", String)
    ], PatchBundlesIdRequestBody.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], PatchBundlesIdRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=expires_at" }),
        __metadata("design:type", Date)
    ], PatchBundlesIdRequestBody.prototype, "expiresAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=form_field_set_id" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdRequestBody.prototype, "formFieldSetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=inbox_id" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdRequestBody.prototype, "inboxId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=max_uses" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdRequestBody.prototype, "maxUses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=note" }),
        __metadata("design:type", String)
    ], PatchBundlesIdRequestBody.prototype, "note", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], PatchBundlesIdRequestBody.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=paths;json=true" }),
        __metadata("design:type", Array)
    ], PatchBundlesIdRequestBody.prototype, "paths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=preview_only" }),
        __metadata("design:type", Boolean)
    ], PatchBundlesIdRequestBody.prototype, "previewOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=require_registration" }),
        __metadata("design:type", Boolean)
    ], PatchBundlesIdRequestBody.prototype, "requireRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=require_share_recipient" }),
        __metadata("design:type", Boolean)
    ], PatchBundlesIdRequestBody.prototype, "requireShareRecipient", void 0);
    return PatchBundlesIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchBundlesIdRequestBody = PatchBundlesIdRequestBody;
var PatchBundlesIdRequest = /** @class */ (function (_super) {
    __extends(PatchBundlesIdRequest, _super);
    function PatchBundlesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchBundlesIdPathParams)
    ], PatchBundlesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchBundlesIdRequestBody)
    ], PatchBundlesIdRequest.prototype, "request", void 0);
    return PatchBundlesIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchBundlesIdRequest = PatchBundlesIdRequest;
var PatchBundlesIdResponse = /** @class */ (function (_super) {
    __extends(PatchBundlesIdResponse, _super);
    function PatchBundlesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BundleEntity)
    ], PatchBundlesIdResponse.prototype, "bundleEntity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchBundlesIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchBundlesIdResponse.prototype, "statusCode", void 0);
    return PatchBundlesIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchBundlesIdResponse = PatchBundlesIdResponse;
