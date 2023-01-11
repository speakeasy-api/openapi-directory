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
exports.PostAutomationsResponse = exports.PostAutomationsRequest = exports.PostAutomationsRequestBody = exports.PostAutomationsRequestBodyTriggerEnum = exports.PostAutomationsRequestBodyAutomationEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostAutomationsRequestBodyAutomationEnum;
(function (PostAutomationsRequestBodyAutomationEnum) {
    PostAutomationsRequestBodyAutomationEnum["CreateFolder"] = "create_folder";
    PostAutomationsRequestBodyAutomationEnum["RequestFile"] = "request_file";
    PostAutomationsRequestBodyAutomationEnum["RequestMove"] = "request_move";
    PostAutomationsRequestBodyAutomationEnum["CopyNewestFile"] = "copy_newest_file";
    PostAutomationsRequestBodyAutomationEnum["DeleteFile"] = "delete_file";
    PostAutomationsRequestBodyAutomationEnum["CopyFile"] = "copy_file";
    PostAutomationsRequestBodyAutomationEnum["MoveFile"] = "move_file";
})(PostAutomationsRequestBodyAutomationEnum = exports.PostAutomationsRequestBodyAutomationEnum || (exports.PostAutomationsRequestBodyAutomationEnum = {}));
var PostAutomationsRequestBodyTriggerEnum;
(function (PostAutomationsRequestBodyTriggerEnum) {
    PostAutomationsRequestBodyTriggerEnum["Realtime"] = "realtime";
    PostAutomationsRequestBodyTriggerEnum["Daily"] = "daily";
    PostAutomationsRequestBodyTriggerEnum["CustomSchedule"] = "custom_schedule";
    PostAutomationsRequestBodyTriggerEnum["Webhook"] = "webhook";
    PostAutomationsRequestBodyTriggerEnum["Email"] = "email";
    PostAutomationsRequestBodyTriggerEnum["Action"] = "action";
})(PostAutomationsRequestBodyTriggerEnum = exports.PostAutomationsRequestBodyTriggerEnum || (exports.PostAutomationsRequestBodyTriggerEnum = {}));
var PostAutomationsRequestBody = /** @class */ (function (_super) {
    __extends(PostAutomationsRequestBody, _super);
    function PostAutomationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=automation" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "automation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=destination" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=destination_replace_from" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "destinationReplaceFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=destination_replace_to" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "destinationReplaceTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=destinations;json=true" }),
        __metadata("design:type", Array)
    ], PostAutomationsRequestBody.prototype, "destinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=group_ids" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "groupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=interval" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "interval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=schedule;json=true" }),
        __metadata("design:type", Object)
    ], PostAutomationsRequestBody.prototype, "schedule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=source" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=trigger" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "trigger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=trigger_action_path" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "triggerActionPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=trigger_actions;json=true" }),
        __metadata("design:type", Array)
    ], PostAutomationsRequestBody.prototype, "triggerActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_ids" }),
        __metadata("design:type", String)
    ], PostAutomationsRequestBody.prototype, "userIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=value;json=true" }),
        __metadata("design:type", Object)
    ], PostAutomationsRequestBody.prototype, "value", void 0);
    return PostAutomationsRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAutomationsRequestBody = PostAutomationsRequestBody;
var PostAutomationsRequest = /** @class */ (function (_super) {
    __extends(PostAutomationsRequest, _super);
    function PostAutomationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostAutomationsRequestBody)
    ], PostAutomationsRequest.prototype, "request", void 0);
    return PostAutomationsRequest;
}(utils_1.SpeakeasyBase));
exports.PostAutomationsRequest = PostAutomationsRequest;
var PostAutomationsResponse = /** @class */ (function (_super) {
    __extends(PostAutomationsResponse, _super);
    function PostAutomationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AutomationEntity)
    ], PostAutomationsResponse.prototype, "automationEntity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAutomationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAutomationsResponse.prototype, "statusCode", void 0);
    return PostAutomationsResponse;
}(utils_1.SpeakeasyBase));
exports.PostAutomationsResponse = PostAutomationsResponse;
