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
exports.ResourceViolation = void 0;
var utils_1 = require("../../../internal/utils");
var awsec2instanceviolation_1 = require("./awsec2instanceviolation");
var awsec2networkinterfaceviolation_1 = require("./awsec2networkinterfaceviolation");
var awsvpcsecuritygroupviolation_1 = require("./awsvpcsecuritygroupviolation");
var dnsduplicaterulegroupviolation_1 = require("./dnsduplicaterulegroupviolation");
var dnsrulegrouplimitexceededviolation_1 = require("./dnsrulegrouplimitexceededviolation");
var dnsrulegrouppriorityconflictviolation_1 = require("./dnsrulegrouppriorityconflictviolation");
var networkfirewallblackholeroutedetectedviolation_1 = require("./networkfirewallblackholeroutedetectedviolation");
var networkfirewallinternettrafficnotinspectedviolation_1 = require("./networkfirewallinternettrafficnotinspectedviolation");
var networkfirewallinvalidrouteconfigurationviolation_1 = require("./networkfirewallinvalidrouteconfigurationviolation");
var networkfirewallmissingexpectedrtviolation_1 = require("./networkfirewallmissingexpectedrtviolation");
var networkfirewallmissingexpectedroutesviolation_1 = require("./networkfirewallmissingexpectedroutesviolation");
var networkfirewallmissingfirewallviolation_1 = require("./networkfirewallmissingfirewallviolation");
var networkfirewallmissingsubnetviolation_1 = require("./networkfirewallmissingsubnetviolation");
var networkfirewallpolicymodifiedviolation_1 = require("./networkfirewallpolicymodifiedviolation");
var networkfirewallunexpectedfirewallroutesviolation_1 = require("./networkfirewallunexpectedfirewallroutesviolation");
var networkfirewallunexpectedgatewayroutesviolation_1 = require("./networkfirewallunexpectedgatewayroutesviolation");
var possibleremediationactions_1 = require("./possibleremediationactions");
// ResourceViolation
/**
 * Violation detail based on resource type.
**/
var ResourceViolation = /** @class */ (function (_super) {
    __extends(ResourceViolation, _super);
    function ResourceViolation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AwsEc2InstanceViolation" }),
        __metadata("design:type", awsec2instanceviolation_1.AwsEc2InstanceViolation)
    ], ResourceViolation.prototype, "awsEc2InstanceViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AwsEc2NetworkInterfaceViolation" }),
        __metadata("design:type", awsec2networkinterfaceviolation_1.AwsEc2NetworkInterfaceViolation)
    ], ResourceViolation.prototype, "awsEc2NetworkInterfaceViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AwsVPCSecurityGroupViolation" }),
        __metadata("design:type", awsvpcsecuritygroupviolation_1.AwsVpcSecurityGroupViolation)
    ], ResourceViolation.prototype, "awsVPCSecurityGroupViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DnsDuplicateRuleGroupViolation" }),
        __metadata("design:type", dnsduplicaterulegroupviolation_1.DnsDuplicateRuleGroupViolation)
    ], ResourceViolation.prototype, "dnsDuplicateRuleGroupViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DnsRuleGroupLimitExceededViolation" }),
        __metadata("design:type", dnsrulegrouplimitexceededviolation_1.DnsRuleGroupLimitExceededViolation)
    ], ResourceViolation.prototype, "dnsRuleGroupLimitExceededViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DnsRuleGroupPriorityConflictViolation" }),
        __metadata("design:type", dnsrulegrouppriorityconflictviolation_1.DnsRuleGroupPriorityConflictViolation)
    ], ResourceViolation.prototype, "dnsRuleGroupPriorityConflictViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallBlackHoleRouteDetectedViolation" }),
        __metadata("design:type", networkfirewallblackholeroutedetectedviolation_1.NetworkFirewallBlackHoleRouteDetectedViolation)
    ], ResourceViolation.prototype, "networkFirewallBlackHoleRouteDetectedViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallInternetTrafficNotInspectedViolation" }),
        __metadata("design:type", networkfirewallinternettrafficnotinspectedviolation_1.NetworkFirewallInternetTrafficNotInspectedViolation)
    ], ResourceViolation.prototype, "networkFirewallInternetTrafficNotInspectedViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallInvalidRouteConfigurationViolation" }),
        __metadata("design:type", networkfirewallinvalidrouteconfigurationviolation_1.NetworkFirewallInvalidRouteConfigurationViolation)
    ], ResourceViolation.prototype, "networkFirewallInvalidRouteConfigurationViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallMissingExpectedRTViolation" }),
        __metadata("design:type", networkfirewallmissingexpectedrtviolation_1.NetworkFirewallMissingExpectedRtViolation)
    ], ResourceViolation.prototype, "networkFirewallMissingExpectedRTViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallMissingExpectedRoutesViolation" }),
        __metadata("design:type", networkfirewallmissingexpectedroutesviolation_1.NetworkFirewallMissingExpectedRoutesViolation)
    ], ResourceViolation.prototype, "networkFirewallMissingExpectedRoutesViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallMissingFirewallViolation" }),
        __metadata("design:type", networkfirewallmissingfirewallviolation_1.NetworkFirewallMissingFirewallViolation)
    ], ResourceViolation.prototype, "networkFirewallMissingFirewallViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallMissingSubnetViolation" }),
        __metadata("design:type", networkfirewallmissingsubnetviolation_1.NetworkFirewallMissingSubnetViolation)
    ], ResourceViolation.prototype, "networkFirewallMissingSubnetViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallPolicyModifiedViolation" }),
        __metadata("design:type", networkfirewallpolicymodifiedviolation_1.NetworkFirewallPolicyModifiedViolation)
    ], ResourceViolation.prototype, "networkFirewallPolicyModifiedViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallUnexpectedFirewallRoutesViolation" }),
        __metadata("design:type", networkfirewallunexpectedfirewallroutesviolation_1.NetworkFirewallUnexpectedFirewallRoutesViolation)
    ], ResourceViolation.prototype, "networkFirewallUnexpectedFirewallRoutesViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NetworkFirewallUnexpectedGatewayRoutesViolation" }),
        __metadata("design:type", networkfirewallunexpectedgatewayroutesviolation_1.NetworkFirewallUnexpectedGatewayRoutesViolation)
    ], ResourceViolation.prototype, "networkFirewallUnexpectedGatewayRoutesViolation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PossibleRemediationActions" }),
        __metadata("design:type", possibleremediationactions_1.PossibleRemediationActions)
    ], ResourceViolation.prototype, "possibleRemediationActions", void 0);
    return ResourceViolation;
}(utils_1.SpeakeasyBase));
exports.ResourceViolation = ResourceViolation;
