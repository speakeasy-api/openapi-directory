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
exports.AddShareResponse = exports.AddShareRequest = exports.AddShareAddShareRequestBody = exports.AddShareAddShareRequestBodyTypeEnum = exports.AddShareAddShareRequestBodyRecipients = exports.AddShareHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddShareHeaders = /** @class */ (function (_super) {
    __extends(AddShareHeaders, _super);
    function AddShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], AddShareHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], AddShareHeaders.prototype, "evApiKey", void 0);
    return AddShareHeaders;
}(utils_1.SpeakeasyBase));
exports.AddShareHeaders = AddShareHeaders;
var AddShareAddShareRequestBodyRecipients = /** @class */ (function (_super) {
    __extends(AddShareAddShareRequestBodyRecipients, _super);
    function AddShareAddShareRequestBodyRecipients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddShareAddShareRequestBodyRecipients.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddShareAddShareRequestBodyRecipients.prototype, "type", void 0);
    return AddShareAddShareRequestBodyRecipients;
}(utils_1.SpeakeasyBase));
exports.AddShareAddShareRequestBodyRecipients = AddShareAddShareRequestBodyRecipients;
var AddShareAddShareRequestBodyTypeEnum;
(function (AddShareAddShareRequestBodyTypeEnum) {
    AddShareAddShareRequestBodyTypeEnum["SharedFolder"] = "shared_folder";
    AddShareAddShareRequestBodyTypeEnum["Receive"] = "receive";
    AddShareAddShareRequestBodyTypeEnum["Send"] = "send";
})(AddShareAddShareRequestBodyTypeEnum = exports.AddShareAddShareRequestBodyTypeEnum || (exports.AddShareAddShareRequestBodyTypeEnum = {}));
var AddShareAddShareRequestBody = /** @class */ (function (_super) {
    __extends(AddShareAddShareRequestBody, _super);
    function AddShareAddShareRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessMode" }),
        __metadata("design:type", shared.AccessMode)
    ], AddShareAddShareRequestBody.prototype, "accessMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], AddShareAddShareRequestBody.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiration" }),
        __metadata("design:type", Date)
    ], AddShareAddShareRequestBody.prototype, "expiration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileDropCreateFolders" }),
        __metadata("design:type", Boolean)
    ], AddShareAddShareRequestBody.prototype, "fileDropCreateFolders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hasNotification" }),
        __metadata("design:type", Boolean)
    ], AddShareAddShareRequestBody.prototype, "hasNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPublic" }),
        __metadata("design:type", Boolean)
    ], AddShareAddShareRequestBody.prototype, "isPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messageBody" }),
        __metadata("design:type", String)
    ], AddShareAddShareRequestBody.prototype, "messageBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messageSubject" }),
        __metadata("design:type", String)
    ], AddShareAddShareRequestBody.prototype, "messageSubject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddShareAddShareRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notificationEmails" }),
        __metadata("design:type", Array)
    ], AddShareAddShareRequestBody.prototype, "notificationEmails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AddShareAddShareRequestBody.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipients", elemType: AddShareAddShareRequestBodyRecipients }),
        __metadata("design:type", Array)
    ], AddShareAddShareRequestBody.prototype, "recipients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requireEmail" }),
        __metadata("design:type", Boolean)
    ], AddShareAddShareRequestBody.prototype, "requireEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources" }),
        __metadata("design:type", Array)
    ], AddShareAddShareRequestBody.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sendingLocalFiles" }),
        __metadata("design:type", Boolean)
    ], AddShareAddShareRequestBody.prototype, "sendingLocalFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddShareAddShareRequestBody.prototype, "type", void 0);
    return AddShareAddShareRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddShareAddShareRequestBody = AddShareAddShareRequestBody;
var AddShareRequest = /** @class */ (function (_super) {
    __extends(AddShareRequest, _super);
    function AddShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddShareHeaders)
    ], AddShareRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddShareAddShareRequestBody)
    ], AddShareRequest.prototype, "request", void 0);
    return AddShareRequest;
}(utils_1.SpeakeasyBase));
exports.AddShareRequest = AddShareRequest;
var AddShareResponse = /** @class */ (function (_super) {
    __extends(AddShareResponse, _super);
    function AddShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddShareResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ShareResponse)
    ], AddShareResponse.prototype, "shareResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddShareResponse.prototype, "statusCode", void 0);
    return AddShareResponse;
}(utils_1.SpeakeasyBase));
exports.AddShareResponse = AddShareResponse;
