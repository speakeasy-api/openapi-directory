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
exports.UpdateFormByIdResponse = exports.UpdateFormByIdRequest = exports.UpdateFormByIdUpdateFormByIdRequestBody = exports.UpdateFormByIdUpdateFormByIdRequestBodyElements = exports.UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum = exports.UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings = exports.UpdateFormByIdHeaders = exports.UpdateFormByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateFormByIdPathParams = /** @class */ (function (_super) {
    __extends(UpdateFormByIdPathParams, _super);
    function UpdateFormByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UpdateFormByIdPathParams.prototype, "id", void 0);
    return UpdateFormByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateFormByIdPathParams = UpdateFormByIdPathParams;
var UpdateFormByIdHeaders = /** @class */ (function (_super) {
    __extends(UpdateFormByIdHeaders, _super);
    function UpdateFormByIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], UpdateFormByIdHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], UpdateFormByIdHeaders.prototype, "evApiKey", void 0);
    return UpdateFormByIdHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateFormByIdHeaders = UpdateFormByIdHeaders;
var UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings = /** @class */ (function (_super) {
    __extends(UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings, _super);
    function UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isRequired" }),
        __metadata("design:type", Boolean)
    ], UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings.prototype, "isRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=senderEmail" }),
        __metadata("design:type", Boolean)
    ], UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings.prototype, "senderEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=useAsFolderName" }),
        __metadata("design:type", Boolean)
    ], UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings.prototype, "useAsFolderName", void 0);
    return UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings = UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings;
var UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum;
(function (UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum) {
    UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum["Name"] = "name";
    UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum["Email"] = "email";
    UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum["Text"] = "text";
    UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum["Textarea"] = "textarea";
    UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum["UploadArea"] = "upload_area";
})(UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum = exports.UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum || (exports.UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum = {}));
var UpdateFormByIdUpdateFormByIdRequestBodyElements = /** @class */ (function (_super) {
    __extends(UpdateFormByIdUpdateFormByIdRequestBodyElements, _super);
    function UpdateFormByIdUpdateFormByIdRequestBodyElements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UpdateFormByIdUpdateFormByIdRequestBodyElements.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateFormByIdUpdateFormByIdRequestBodyElements.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], UpdateFormByIdUpdateFormByIdRequestBodyElements.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings)
    ], UpdateFormByIdUpdateFormByIdRequestBodyElements.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateFormByIdUpdateFormByIdRequestBodyElements.prototype, "type", void 0);
    return UpdateFormByIdUpdateFormByIdRequestBodyElements;
}(utils_1.SpeakeasyBase));
exports.UpdateFormByIdUpdateFormByIdRequestBodyElements = UpdateFormByIdUpdateFormByIdRequestBodyElements;
// UpdateFormByIdUpdateFormByIdRequestBody
/**
 * CSS Styles of the form.
**/
var UpdateFormByIdUpdateFormByIdRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFormByIdUpdateFormByIdRequestBody, _super);
    function UpdateFormByIdUpdateFormByIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cssStyles" }),
        __metadata("design:type", String)
    ], UpdateFormByIdUpdateFormByIdRequestBody.prototype, "cssStyles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elements", elemType: UpdateFormByIdUpdateFormByIdRequestBodyElements }),
        __metadata("design:type", Array)
    ], UpdateFormByIdUpdateFormByIdRequestBody.prototype, "elements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formDescription" }),
        __metadata("design:type", String)
    ], UpdateFormByIdUpdateFormByIdRequestBody.prototype, "formDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submitButtonText" }),
        __metadata("design:type", String)
    ], UpdateFormByIdUpdateFormByIdRequestBody.prototype, "submitButtonText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successMessage" }),
        __metadata("design:type", String)
    ], UpdateFormByIdUpdateFormByIdRequestBody.prototype, "successMessage", void 0);
    return UpdateFormByIdUpdateFormByIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateFormByIdUpdateFormByIdRequestBody = UpdateFormByIdUpdateFormByIdRequestBody;
var UpdateFormByIdRequest = /** @class */ (function (_super) {
    __extends(UpdateFormByIdRequest, _super);
    function UpdateFormByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFormByIdPathParams)
    ], UpdateFormByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFormByIdHeaders)
    ], UpdateFormByIdRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFormByIdUpdateFormByIdRequestBody)
    ], UpdateFormByIdRequest.prototype, "request", void 0);
    return UpdateFormByIdRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateFormByIdRequest = UpdateFormByIdRequest;
var UpdateFormByIdResponse = /** @class */ (function (_super) {
    __extends(UpdateFormByIdResponse, _super);
    function UpdateFormByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateFormByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FormResponse)
    ], UpdateFormByIdResponse.prototype, "formResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateFormByIdResponse.prototype, "statusCode", void 0);
    return UpdateFormByIdResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateFormByIdResponse = UpdateFormByIdResponse;
