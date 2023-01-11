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
exports.AddNotificationResponse = exports.AddNotificationRequest = exports.AddNotificationAddNotificationRequestBody = exports.AddNotificationAddNotificationRequestBodyTypeEnum = exports.AddNotificationAddNotificationRequestBodyActionEnum = exports.AddNotificationHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddNotificationHeaders = /** @class */ (function (_super) {
    __extends(AddNotificationHeaders, _super);
    function AddNotificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], AddNotificationHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], AddNotificationHeaders.prototype, "evApiKey", void 0);
    return AddNotificationHeaders;
}(utils_1.SpeakeasyBase));
exports.AddNotificationHeaders = AddNotificationHeaders;
var AddNotificationAddNotificationRequestBodyActionEnum;
(function (AddNotificationAddNotificationRequestBodyActionEnum) {
    AddNotificationAddNotificationRequestBodyActionEnum["Upload"] = "upload";
    AddNotificationAddNotificationRequestBodyActionEnum["Download"] = "download";
    AddNotificationAddNotificationRequestBodyActionEnum["Delete"] = "delete";
    AddNotificationAddNotificationRequestBodyActionEnum["All"] = "all";
})(AddNotificationAddNotificationRequestBodyActionEnum = exports.AddNotificationAddNotificationRequestBodyActionEnum || (exports.AddNotificationAddNotificationRequestBodyActionEnum = {}));
var AddNotificationAddNotificationRequestBodyTypeEnum;
(function (AddNotificationAddNotificationRequestBodyTypeEnum) {
    AddNotificationAddNotificationRequestBodyTypeEnum["File"] = "file";
    AddNotificationAddNotificationRequestBodyTypeEnum["Folder"] = "folder";
})(AddNotificationAddNotificationRequestBodyTypeEnum = exports.AddNotificationAddNotificationRequestBodyTypeEnum || (exports.AddNotificationAddNotificationRequestBodyTypeEnum = {}));
var AddNotificationAddNotificationRequestBody = /** @class */ (function (_super) {
    __extends(AddNotificationAddNotificationRequestBody, _super);
    function AddNotificationAddNotificationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], AddNotificationAddNotificationRequestBody.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AddNotificationAddNotificationRequestBody.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipients" }),
        __metadata("design:type", Array)
    ], AddNotificationAddNotificationRequestBody.prototype, "recipients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], AddNotificationAddNotificationRequestBody.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sendEmail" }),
        __metadata("design:type", Boolean)
    ], AddNotificationAddNotificationRequestBody.prototype, "sendEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddNotificationAddNotificationRequestBody.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usernames" }),
        __metadata("design:type", Array)
    ], AddNotificationAddNotificationRequestBody.prototype, "usernames", void 0);
    return AddNotificationAddNotificationRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddNotificationAddNotificationRequestBody = AddNotificationAddNotificationRequestBody;
var AddNotificationRequest = /** @class */ (function (_super) {
    __extends(AddNotificationRequest, _super);
    function AddNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddNotificationHeaders)
    ], AddNotificationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddNotificationAddNotificationRequestBody)
    ], AddNotificationRequest.prototype, "request", void 0);
    return AddNotificationRequest;
}(utils_1.SpeakeasyBase));
exports.AddNotificationRequest = AddNotificationRequest;
var AddNotificationResponse = /** @class */ (function (_super) {
    __extends(AddNotificationResponse, _super);
    function AddNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotificationResponse)
    ], AddNotificationResponse.prototype, "notificationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddNotificationResponse.prototype, "statusCode", void 0);
    return AddNotificationResponse;
}(utils_1.SpeakeasyBase));
exports.AddNotificationResponse = AddNotificationResponse;
