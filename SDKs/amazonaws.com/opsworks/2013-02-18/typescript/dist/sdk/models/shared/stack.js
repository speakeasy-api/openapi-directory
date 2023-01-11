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
exports.Stack = void 0;
var utils_1 = require("../../../internal/utils");
var chefconfiguration_1 = require("./chefconfiguration");
var stackconfigurationmanager_1 = require("./stackconfigurationmanager");
var source_1 = require("./source");
var rootdevicetypeenum_1 = require("./rootdevicetypeenum");
// Stack
/**
 * Describes a stack.
**/
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AgentVersion" }),
        __metadata("design:type", String)
    ], Stack.prototype, "agentVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], Stack.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes" }),
        __metadata("design:type", Object)
    ], Stack.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChefConfiguration" }),
        __metadata("design:type", chefconfiguration_1.ChefConfiguration)
    ], Stack.prototype, "chefConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConfigurationManager" }),
        __metadata("design:type", stackconfigurationmanager_1.StackConfigurationManager)
    ], Stack.prototype, "configurationManager", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedAt" }),
        __metadata("design:type", String)
    ], Stack.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomCookbooksSource" }),
        __metadata("design:type", source_1.Source)
    ], Stack.prototype, "customCookbooksSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomJson" }),
        __metadata("design:type", String)
    ], Stack.prototype, "customJson", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultAvailabilityZone" }),
        __metadata("design:type", String)
    ], Stack.prototype, "defaultAvailabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultInstanceProfileArn" }),
        __metadata("design:type", String)
    ], Stack.prototype, "defaultInstanceProfileArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultOs" }),
        __metadata("design:type", String)
    ], Stack.prototype, "defaultOs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultRootDeviceType" }),
        __metadata("design:type", String)
    ], Stack.prototype, "defaultRootDeviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultSshKeyName" }),
        __metadata("design:type", String)
    ], Stack.prototype, "defaultSshKeyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultSubnetId" }),
        __metadata("design:type", String)
    ], Stack.prototype, "defaultSubnetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=HostnameTheme" }),
        __metadata("design:type", String)
    ], Stack.prototype, "hostnameTheme", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Stack.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Region" }),
        __metadata("design:type", String)
    ], Stack.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], Stack.prototype, "serviceRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StackId" }),
        __metadata("design:type", String)
    ], Stack.prototype, "stackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UseCustomCookbooks" }),
        __metadata("design:type", Boolean)
    ], Stack.prototype, "useCustomCookbooks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UseOpsworksSecurityGroups" }),
        __metadata("design:type", Boolean)
    ], Stack.prototype, "useOpsworksSecurityGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], Stack.prototype, "vpcId", void 0);
    return Stack;
}(utils_1.SpeakeasyBase));
exports.Stack = Stack;
