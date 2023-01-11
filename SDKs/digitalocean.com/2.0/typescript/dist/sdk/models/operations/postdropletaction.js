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
exports.PostDropletActionResponse = exports.PostDropletActionRequest = exports.PostDropletAction401ApplicationJson = exports.PostDropletActionRequestBody7 = exports.PostDropletActionRequestBody7TypeEnum = exports.PostDropletActionRequestBody6 = exports.PostDropletActionRequestBody6TypeEnum = exports.PostDropletActionRequestBody5 = exports.PostDropletActionRequestBody5TypeEnum = exports.PostDropletActionRequestBody4 = exports.PostDropletActionRequestBody4TypeEnum = exports.PostDropletActionRequestBody3 = exports.PostDropletActionRequestBody3TypeEnum = exports.PostDropletActionRequestBody2 = exports.PostDropletActionRequestBody2TypeEnum = exports.PostDropletActionRequestBody1 = exports.PostDropletActionRequestBody1TypeEnum = exports.PostDropletActionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostDropletActionPathParams = /** @class */ (function (_super) {
    __extends(PostDropletActionPathParams, _super);
    function PostDropletActionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=droplet_id" }),
        __metadata("design:type", Number)
    ], PostDropletActionPathParams.prototype, "dropletId", void 0);
    return PostDropletActionPathParams;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionPathParams = PostDropletActionPathParams;
var PostDropletActionRequestBody1TypeEnum;
(function (PostDropletActionRequestBody1TypeEnum) {
    PostDropletActionRequestBody1TypeEnum["EnableBackups"] = "enable_backups";
    PostDropletActionRequestBody1TypeEnum["DisableBackups"] = "disable_backups";
    PostDropletActionRequestBody1TypeEnum["Reboot"] = "reboot";
    PostDropletActionRequestBody1TypeEnum["PowerCycle"] = "power_cycle";
    PostDropletActionRequestBody1TypeEnum["Shutdown"] = "shutdown";
    PostDropletActionRequestBody1TypeEnum["PowerOff"] = "power_off";
    PostDropletActionRequestBody1TypeEnum["PowerOn"] = "power_on";
    PostDropletActionRequestBody1TypeEnum["Restore"] = "restore";
    PostDropletActionRequestBody1TypeEnum["PasswordReset"] = "password_reset";
    PostDropletActionRequestBody1TypeEnum["Resize"] = "resize";
    PostDropletActionRequestBody1TypeEnum["Rebuild"] = "rebuild";
    PostDropletActionRequestBody1TypeEnum["Rename"] = "rename";
    PostDropletActionRequestBody1TypeEnum["ChangeKernel"] = "change_kernel";
    PostDropletActionRequestBody1TypeEnum["EnableIpv6"] = "enable_ipv6";
    PostDropletActionRequestBody1TypeEnum["Snapshot"] = "snapshot";
})(PostDropletActionRequestBody1TypeEnum = exports.PostDropletActionRequestBody1TypeEnum || (exports.PostDropletActionRequestBody1TypeEnum = {}));
// PostDropletActionRequestBody1
/**
 * Specifies the action that will be taken on the Droplet.
**/
var PostDropletActionRequestBody1 = /** @class */ (function (_super) {
    __extends(PostDropletActionRequestBody1, _super);
    function PostDropletActionRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody1.prototype, "type", void 0);
    return PostDropletActionRequestBody1;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionRequestBody1 = PostDropletActionRequestBody1;
var PostDropletActionRequestBody2TypeEnum;
(function (PostDropletActionRequestBody2TypeEnum) {
    PostDropletActionRequestBody2TypeEnum["EnableBackups"] = "enable_backups";
    PostDropletActionRequestBody2TypeEnum["DisableBackups"] = "disable_backups";
    PostDropletActionRequestBody2TypeEnum["Reboot"] = "reboot";
    PostDropletActionRequestBody2TypeEnum["PowerCycle"] = "power_cycle";
    PostDropletActionRequestBody2TypeEnum["Shutdown"] = "shutdown";
    PostDropletActionRequestBody2TypeEnum["PowerOff"] = "power_off";
    PostDropletActionRequestBody2TypeEnum["PowerOn"] = "power_on";
    PostDropletActionRequestBody2TypeEnum["Restore"] = "restore";
    PostDropletActionRequestBody2TypeEnum["PasswordReset"] = "password_reset";
    PostDropletActionRequestBody2TypeEnum["Resize"] = "resize";
    PostDropletActionRequestBody2TypeEnum["Rebuild"] = "rebuild";
    PostDropletActionRequestBody2TypeEnum["Rename"] = "rename";
    PostDropletActionRequestBody2TypeEnum["ChangeKernel"] = "change_kernel";
    PostDropletActionRequestBody2TypeEnum["EnableIpv6"] = "enable_ipv6";
    PostDropletActionRequestBody2TypeEnum["Snapshot"] = "snapshot";
})(PostDropletActionRequestBody2TypeEnum = exports.PostDropletActionRequestBody2TypeEnum || (exports.PostDropletActionRequestBody2TypeEnum = {}));
// PostDropletActionRequestBody2
/**
 * Specifies the action that will be taken on the Droplet.
**/
var PostDropletActionRequestBody2 = /** @class */ (function (_super) {
    __extends(PostDropletActionRequestBody2, _super);
    function PostDropletActionRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Number)
    ], PostDropletActionRequestBody2.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody2.prototype, "type", void 0);
    return PostDropletActionRequestBody2;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionRequestBody2 = PostDropletActionRequestBody2;
var PostDropletActionRequestBody3TypeEnum;
(function (PostDropletActionRequestBody3TypeEnum) {
    PostDropletActionRequestBody3TypeEnum["EnableBackups"] = "enable_backups";
    PostDropletActionRequestBody3TypeEnum["DisableBackups"] = "disable_backups";
    PostDropletActionRequestBody3TypeEnum["Reboot"] = "reboot";
    PostDropletActionRequestBody3TypeEnum["PowerCycle"] = "power_cycle";
    PostDropletActionRequestBody3TypeEnum["Shutdown"] = "shutdown";
    PostDropletActionRequestBody3TypeEnum["PowerOff"] = "power_off";
    PostDropletActionRequestBody3TypeEnum["PowerOn"] = "power_on";
    PostDropletActionRequestBody3TypeEnum["Restore"] = "restore";
    PostDropletActionRequestBody3TypeEnum["PasswordReset"] = "password_reset";
    PostDropletActionRequestBody3TypeEnum["Resize"] = "resize";
    PostDropletActionRequestBody3TypeEnum["Rebuild"] = "rebuild";
    PostDropletActionRequestBody3TypeEnum["Rename"] = "rename";
    PostDropletActionRequestBody3TypeEnum["ChangeKernel"] = "change_kernel";
    PostDropletActionRequestBody3TypeEnum["EnableIpv6"] = "enable_ipv6";
    PostDropletActionRequestBody3TypeEnum["Snapshot"] = "snapshot";
})(PostDropletActionRequestBody3TypeEnum = exports.PostDropletActionRequestBody3TypeEnum || (exports.PostDropletActionRequestBody3TypeEnum = {}));
// PostDropletActionRequestBody3
/**
 * Specifies the action that will be taken on the Droplet.
**/
var PostDropletActionRequestBody3 = /** @class */ (function (_super) {
    __extends(PostDropletActionRequestBody3, _super);
    function PostDropletActionRequestBody3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disk" }),
        __metadata("design:type", Boolean)
    ], PostDropletActionRequestBody3.prototype, "disk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody3.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody3.prototype, "type", void 0);
    return PostDropletActionRequestBody3;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionRequestBody3 = PostDropletActionRequestBody3;
var PostDropletActionRequestBody4TypeEnum;
(function (PostDropletActionRequestBody4TypeEnum) {
    PostDropletActionRequestBody4TypeEnum["EnableBackups"] = "enable_backups";
    PostDropletActionRequestBody4TypeEnum["DisableBackups"] = "disable_backups";
    PostDropletActionRequestBody4TypeEnum["Reboot"] = "reboot";
    PostDropletActionRequestBody4TypeEnum["PowerCycle"] = "power_cycle";
    PostDropletActionRequestBody4TypeEnum["Shutdown"] = "shutdown";
    PostDropletActionRequestBody4TypeEnum["PowerOff"] = "power_off";
    PostDropletActionRequestBody4TypeEnum["PowerOn"] = "power_on";
    PostDropletActionRequestBody4TypeEnum["Restore"] = "restore";
    PostDropletActionRequestBody4TypeEnum["PasswordReset"] = "password_reset";
    PostDropletActionRequestBody4TypeEnum["Resize"] = "resize";
    PostDropletActionRequestBody4TypeEnum["Rebuild"] = "rebuild";
    PostDropletActionRequestBody4TypeEnum["Rename"] = "rename";
    PostDropletActionRequestBody4TypeEnum["ChangeKernel"] = "change_kernel";
    PostDropletActionRequestBody4TypeEnum["EnableIpv6"] = "enable_ipv6";
    PostDropletActionRequestBody4TypeEnum["Snapshot"] = "snapshot";
})(PostDropletActionRequestBody4TypeEnum = exports.PostDropletActionRequestBody4TypeEnum || (exports.PostDropletActionRequestBody4TypeEnum = {}));
// PostDropletActionRequestBody4
/**
 * Specifies the action that will be taken on the Droplet.
**/
var PostDropletActionRequestBody4 = /** @class */ (function (_super) {
    __extends(PostDropletActionRequestBody4, _super);
    function PostDropletActionRequestBody4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Object)
    ], PostDropletActionRequestBody4.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody4.prototype, "type", void 0);
    return PostDropletActionRequestBody4;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionRequestBody4 = PostDropletActionRequestBody4;
var PostDropletActionRequestBody5TypeEnum;
(function (PostDropletActionRequestBody5TypeEnum) {
    PostDropletActionRequestBody5TypeEnum["EnableBackups"] = "enable_backups";
    PostDropletActionRequestBody5TypeEnum["DisableBackups"] = "disable_backups";
    PostDropletActionRequestBody5TypeEnum["Reboot"] = "reboot";
    PostDropletActionRequestBody5TypeEnum["PowerCycle"] = "power_cycle";
    PostDropletActionRequestBody5TypeEnum["Shutdown"] = "shutdown";
    PostDropletActionRequestBody5TypeEnum["PowerOff"] = "power_off";
    PostDropletActionRequestBody5TypeEnum["PowerOn"] = "power_on";
    PostDropletActionRequestBody5TypeEnum["Restore"] = "restore";
    PostDropletActionRequestBody5TypeEnum["PasswordReset"] = "password_reset";
    PostDropletActionRequestBody5TypeEnum["Resize"] = "resize";
    PostDropletActionRequestBody5TypeEnum["Rebuild"] = "rebuild";
    PostDropletActionRequestBody5TypeEnum["Rename"] = "rename";
    PostDropletActionRequestBody5TypeEnum["ChangeKernel"] = "change_kernel";
    PostDropletActionRequestBody5TypeEnum["EnableIpv6"] = "enable_ipv6";
    PostDropletActionRequestBody5TypeEnum["Snapshot"] = "snapshot";
})(PostDropletActionRequestBody5TypeEnum = exports.PostDropletActionRequestBody5TypeEnum || (exports.PostDropletActionRequestBody5TypeEnum = {}));
// PostDropletActionRequestBody5
/**
 * Specifies the action that will be taken on the Droplet.
**/
var PostDropletActionRequestBody5 = /** @class */ (function (_super) {
    __extends(PostDropletActionRequestBody5, _super);
    function PostDropletActionRequestBody5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody5.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody5.prototype, "type", void 0);
    return PostDropletActionRequestBody5;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionRequestBody5 = PostDropletActionRequestBody5;
var PostDropletActionRequestBody6TypeEnum;
(function (PostDropletActionRequestBody6TypeEnum) {
    PostDropletActionRequestBody6TypeEnum["EnableBackups"] = "enable_backups";
    PostDropletActionRequestBody6TypeEnum["DisableBackups"] = "disable_backups";
    PostDropletActionRequestBody6TypeEnum["Reboot"] = "reboot";
    PostDropletActionRequestBody6TypeEnum["PowerCycle"] = "power_cycle";
    PostDropletActionRequestBody6TypeEnum["Shutdown"] = "shutdown";
    PostDropletActionRequestBody6TypeEnum["PowerOff"] = "power_off";
    PostDropletActionRequestBody6TypeEnum["PowerOn"] = "power_on";
    PostDropletActionRequestBody6TypeEnum["Restore"] = "restore";
    PostDropletActionRequestBody6TypeEnum["PasswordReset"] = "password_reset";
    PostDropletActionRequestBody6TypeEnum["Resize"] = "resize";
    PostDropletActionRequestBody6TypeEnum["Rebuild"] = "rebuild";
    PostDropletActionRequestBody6TypeEnum["Rename"] = "rename";
    PostDropletActionRequestBody6TypeEnum["ChangeKernel"] = "change_kernel";
    PostDropletActionRequestBody6TypeEnum["EnableIpv6"] = "enable_ipv6";
    PostDropletActionRequestBody6TypeEnum["Snapshot"] = "snapshot";
})(PostDropletActionRequestBody6TypeEnum = exports.PostDropletActionRequestBody6TypeEnum || (exports.PostDropletActionRequestBody6TypeEnum = {}));
// PostDropletActionRequestBody6
/**
 * Specifies the action that will be taken on the Droplet.
**/
var PostDropletActionRequestBody6 = /** @class */ (function (_super) {
    __extends(PostDropletActionRequestBody6, _super);
    function PostDropletActionRequestBody6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kernel" }),
        __metadata("design:type", Number)
    ], PostDropletActionRequestBody6.prototype, "kernel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody6.prototype, "type", void 0);
    return PostDropletActionRequestBody6;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionRequestBody6 = PostDropletActionRequestBody6;
var PostDropletActionRequestBody7TypeEnum;
(function (PostDropletActionRequestBody7TypeEnum) {
    PostDropletActionRequestBody7TypeEnum["EnableBackups"] = "enable_backups";
    PostDropletActionRequestBody7TypeEnum["DisableBackups"] = "disable_backups";
    PostDropletActionRequestBody7TypeEnum["Reboot"] = "reboot";
    PostDropletActionRequestBody7TypeEnum["PowerCycle"] = "power_cycle";
    PostDropletActionRequestBody7TypeEnum["Shutdown"] = "shutdown";
    PostDropletActionRequestBody7TypeEnum["PowerOff"] = "power_off";
    PostDropletActionRequestBody7TypeEnum["PowerOn"] = "power_on";
    PostDropletActionRequestBody7TypeEnum["Restore"] = "restore";
    PostDropletActionRequestBody7TypeEnum["PasswordReset"] = "password_reset";
    PostDropletActionRequestBody7TypeEnum["Resize"] = "resize";
    PostDropletActionRequestBody7TypeEnum["Rebuild"] = "rebuild";
    PostDropletActionRequestBody7TypeEnum["Rename"] = "rename";
    PostDropletActionRequestBody7TypeEnum["ChangeKernel"] = "change_kernel";
    PostDropletActionRequestBody7TypeEnum["EnableIpv6"] = "enable_ipv6";
    PostDropletActionRequestBody7TypeEnum["Snapshot"] = "snapshot";
})(PostDropletActionRequestBody7TypeEnum = exports.PostDropletActionRequestBody7TypeEnum || (exports.PostDropletActionRequestBody7TypeEnum = {}));
// PostDropletActionRequestBody7
/**
 * Specifies the action that will be taken on the Droplet.
**/
var PostDropletActionRequestBody7 = /** @class */ (function (_super) {
    __extends(PostDropletActionRequestBody7, _super);
    function PostDropletActionRequestBody7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody7.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostDropletActionRequestBody7.prototype, "type", void 0);
    return PostDropletActionRequestBody7;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionRequestBody7 = PostDropletActionRequestBody7;
var PostDropletAction401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDropletAction401ApplicationJson, _super);
    function PostDropletAction401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostDropletAction401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDropletAction401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], PostDropletAction401ApplicationJson.prototype, "requestId", void 0);
    return PostDropletAction401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostDropletAction401ApplicationJson = PostDropletAction401ApplicationJson;
var PostDropletActionRequest = /** @class */ (function (_super) {
    __extends(PostDropletActionRequest, _super);
    function PostDropletActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDropletActionPathParams)
    ], PostDropletActionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDropletActionRequest.prototype, "request", void 0);
    return PostDropletActionRequest;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionRequest = PostDropletActionRequest;
var PostDropletActionResponse = /** @class */ (function (_super) {
    __extends(PostDropletActionResponse, _super);
    function PostDropletActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDropletActionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostDropletActionResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDropletActionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostDropletActionResponse.prototype, "postDropletAction201ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDropletAction401ApplicationJson)
    ], PostDropletActionResponse.prototype, "postDropletAction401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], PostDropletActionResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return PostDropletActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostDropletActionResponse = PostDropletActionResponse;
