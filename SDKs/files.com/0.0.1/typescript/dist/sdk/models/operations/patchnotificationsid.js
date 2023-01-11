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
exports.PatchNotificationsIdResponse = exports.PatchNotificationsIdRequest = exports.PatchNotificationsIdRequestBody = exports.PatchNotificationsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchNotificationsIdPathParams = /** @class */ (function (_super) {
    __extends(PatchNotificationsIdPathParams, _super);
    function PatchNotificationsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchNotificationsIdPathParams.prototype, "id", void 0);
    return PatchNotificationsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchNotificationsIdPathParams = PatchNotificationsIdPathParams;
var PatchNotificationsIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchNotificationsIdRequestBody, _super);
    function PatchNotificationsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=notify_on_copy" }),
        __metadata("design:type", Boolean)
    ], PatchNotificationsIdRequestBody.prototype, "notifyOnCopy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=notify_user_actions" }),
        __metadata("design:type", Boolean)
    ], PatchNotificationsIdRequestBody.prototype, "notifyUserActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recursive" }),
        __metadata("design:type", Boolean)
    ], PatchNotificationsIdRequestBody.prototype, "recursive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=send_interval" }),
        __metadata("design:type", String)
    ], PatchNotificationsIdRequestBody.prototype, "sendInterval", void 0);
    return PatchNotificationsIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchNotificationsIdRequestBody = PatchNotificationsIdRequestBody;
var PatchNotificationsIdRequest = /** @class */ (function (_super) {
    __extends(PatchNotificationsIdRequest, _super);
    function PatchNotificationsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchNotificationsIdPathParams)
    ], PatchNotificationsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchNotificationsIdRequestBody)
    ], PatchNotificationsIdRequest.prototype, "request", void 0);
    return PatchNotificationsIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchNotificationsIdRequest = PatchNotificationsIdRequest;
var PatchNotificationsIdResponse = /** @class */ (function (_super) {
    __extends(PatchNotificationsIdResponse, _super);
    function PatchNotificationsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchNotificationsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotificationEntity)
    ], PatchNotificationsIdResponse.prototype, "notificationEntity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchNotificationsIdResponse.prototype, "statusCode", void 0);
    return PatchNotificationsIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchNotificationsIdResponse = PatchNotificationsIdResponse;
