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
exports.CreateNetworkInterfacePermissionResult = exports.CreateNetworkInterfacePermissionResultInterfacePermission = exports.CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState = void 0;
var utils_1 = require("../../../internal/utils");
// CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState
/**
 * Information about the state of the permission.
**/
var CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState, _super);
    function CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState.prototype, "statusMessage", void 0);
    return CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState = CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState;
// CreateNetworkInterfacePermissionResultInterfacePermission
/**
 * Information about the permission for the network interface.
**/
var CreateNetworkInterfacePermissionResultInterfacePermission = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfacePermissionResultInterfacePermission, _super);
    function CreateNetworkInterfacePermissionResultInterfacePermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfacePermissionResultInterfacePermission.prototype, "awsAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfacePermissionResultInterfacePermission.prototype, "awsService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfacePermissionResultInterfacePermission.prototype, "networkInterfaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfacePermissionResultInterfacePermission.prototype, "networkInterfacePermissionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfacePermissionResultInterfacePermission.prototype, "permission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState)
    ], CreateNetworkInterfacePermissionResultInterfacePermission.prototype, "permissionState", void 0);
    return CreateNetworkInterfacePermissionResultInterfacePermission;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkInterfacePermissionResultInterfacePermission = CreateNetworkInterfacePermissionResultInterfacePermission;
// CreateNetworkInterfacePermissionResult
/**
 * Contains the output of CreateNetworkInterfacePermission.
**/
var CreateNetworkInterfacePermissionResult = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfacePermissionResult, _super);
    function CreateNetworkInterfacePermissionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkInterfacePermissionResultInterfacePermission)
    ], CreateNetworkInterfacePermissionResult.prototype, "interfacePermission", void 0);
    return CreateNetworkInterfacePermissionResult;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkInterfacePermissionResult = CreateNetworkInterfacePermissionResult;
