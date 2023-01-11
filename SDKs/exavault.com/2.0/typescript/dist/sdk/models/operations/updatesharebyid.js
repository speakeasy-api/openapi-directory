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
exports.UpdateShareByIdResponse = exports.UpdateShareByIdRequest = exports.UpdateShareByIdUpdateShareRequestBody = exports.UpdateShareByIdUpdateShareRequestBodyRecipients = exports.UpdateShareByIdHeaders = exports.UpdateShareByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateShareByIdPathParams = /** @class */ (function (_super) {
    __extends(UpdateShareByIdPathParams, _super);
    function UpdateShareByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UpdateShareByIdPathParams.prototype, "id", void 0);
    return UpdateShareByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateShareByIdPathParams = UpdateShareByIdPathParams;
var UpdateShareByIdHeaders = /** @class */ (function (_super) {
    __extends(UpdateShareByIdHeaders, _super);
    function UpdateShareByIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], UpdateShareByIdHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], UpdateShareByIdHeaders.prototype, "evApiKey", void 0);
    return UpdateShareByIdHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateShareByIdHeaders = UpdateShareByIdHeaders;
var UpdateShareByIdUpdateShareRequestBodyRecipients = /** @class */ (function (_super) {
    __extends(UpdateShareByIdUpdateShareRequestBodyRecipients, _super);
    function UpdateShareByIdUpdateShareRequestBodyRecipients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UpdateShareByIdUpdateShareRequestBodyRecipients.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateShareByIdUpdateShareRequestBodyRecipients.prototype, "type", void 0);
    return UpdateShareByIdUpdateShareRequestBodyRecipients;
}(utils_1.SpeakeasyBase));
exports.UpdateShareByIdUpdateShareRequestBodyRecipients = UpdateShareByIdUpdateShareRequestBodyRecipients;
var UpdateShareByIdUpdateShareRequestBody = /** @class */ (function (_super) {
    __extends(UpdateShareByIdUpdateShareRequestBody, _super);
    function UpdateShareByIdUpdateShareRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessMode" }),
        __metadata("design:type", shared.AccessMode)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "accessMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiration" }),
        __metadata("design:type", Date)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "expiration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileDropCreateFolders" }),
        __metadata("design:type", Boolean)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "fileDropCreateFolders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hasNotification" }),
        __metadata("design:type", Boolean)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "hasNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPublic" }),
        __metadata("design:type", Boolean)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "isPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messageBody" }),
        __metadata("design:type", String)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "messageBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messageSubject" }),
        __metadata("design:type", String)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "messageSubject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notificationEmails" }),
        __metadata("design:type", Array)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "notificationEmails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipients", elemType: UpdateShareByIdUpdateShareRequestBodyRecipients }),
        __metadata("design:type", Array)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "recipients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requireEmail" }),
        __metadata("design:type", Boolean)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "requireEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources" }),
        __metadata("design:type", Array)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpdateShareByIdUpdateShareRequestBody.prototype, "status", void 0);
    return UpdateShareByIdUpdateShareRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateShareByIdUpdateShareRequestBody = UpdateShareByIdUpdateShareRequestBody;
var UpdateShareByIdRequest = /** @class */ (function (_super) {
    __extends(UpdateShareByIdRequest, _super);
    function UpdateShareByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateShareByIdPathParams)
    ], UpdateShareByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateShareByIdHeaders)
    ], UpdateShareByIdRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateShareByIdUpdateShareRequestBody)
    ], UpdateShareByIdRequest.prototype, "request", void 0);
    return UpdateShareByIdRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateShareByIdRequest = UpdateShareByIdRequest;
var UpdateShareByIdResponse = /** @class */ (function (_super) {
    __extends(UpdateShareByIdResponse, _super);
    function UpdateShareByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateShareByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ShareResponse)
    ], UpdateShareByIdResponse.prototype, "shareResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateShareByIdResponse.prototype, "statusCode", void 0);
    return UpdateShareByIdResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateShareByIdResponse = UpdateShareByIdResponse;
