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
exports.ServerLaunchConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var s3location_1 = require("./s3location");
var scripttypeenum_1 = require("./scripttypeenum");
var server_1 = require("./server");
var userdata_1 = require("./userdata");
// ServerLaunchConfiguration
/**
 * Launch configuration for a server.
**/
var ServerLaunchConfiguration = /** @class */ (function (_super) {
    __extends(ServerLaunchConfiguration, _super);
    function ServerLaunchConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associatePublicIpAddress" }),
        __metadata("design:type", Boolean)
    ], ServerLaunchConfiguration.prototype, "associatePublicIpAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configureScript" }),
        __metadata("design:type", s3location_1.S3Location)
    ], ServerLaunchConfiguration.prototype, "configureScript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configureScriptType" }),
        __metadata("design:type", String)
    ], ServerLaunchConfiguration.prototype, "configureScriptType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2KeyName" }),
        __metadata("design:type", String)
    ], ServerLaunchConfiguration.prototype, "ec2KeyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamInstanceProfileName" }),
        __metadata("design:type", String)
    ], ServerLaunchConfiguration.prototype, "iamInstanceProfileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], ServerLaunchConfiguration.prototype, "instanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logicalId" }),
        __metadata("design:type", String)
    ], ServerLaunchConfiguration.prototype, "logicalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityGroup" }),
        __metadata("design:type", String)
    ], ServerLaunchConfiguration.prototype, "securityGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server" }),
        __metadata("design:type", server_1.Server)
    ], ServerLaunchConfiguration.prototype, "server", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], ServerLaunchConfiguration.prototype, "subnet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userData" }),
        __metadata("design:type", userdata_1.UserData)
    ], ServerLaunchConfiguration.prototype, "userData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc" }),
        __metadata("design:type", String)
    ], ServerLaunchConfiguration.prototype, "vpc", void 0);
    return ServerLaunchConfiguration;
}(utils_1.SpeakeasyBase));
exports.ServerLaunchConfiguration = ServerLaunchConfiguration;
