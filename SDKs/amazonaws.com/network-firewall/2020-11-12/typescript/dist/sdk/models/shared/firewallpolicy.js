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
exports.FirewallPolicy = void 0;
var utils_1 = require("../../../internal/utils");
var statefulrulegroupreference_1 = require("./statefulrulegroupreference");
var customaction_1 = require("./customaction");
var statelessrulegroupreference_1 = require("./statelessrulegroupreference");
// FirewallPolicy
/**
 * <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
**/
var FirewallPolicy = /** @class */ (function (_super) {
    __extends(FirewallPolicy, _super);
    function FirewallPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StatefulRuleGroupReferences", elemType: statefulrulegroupreference_1.StatefulRuleGroupReference }),
        __metadata("design:type", Array)
    ], FirewallPolicy.prototype, "statefulRuleGroupReferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StatelessCustomActions", elemType: customaction_1.CustomAction }),
        __metadata("design:type", Array)
    ], FirewallPolicy.prototype, "statelessCustomActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StatelessDefaultActions" }),
        __metadata("design:type", Array)
    ], FirewallPolicy.prototype, "statelessDefaultActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StatelessFragmentDefaultActions" }),
        __metadata("design:type", Array)
    ], FirewallPolicy.prototype, "statelessFragmentDefaultActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StatelessRuleGroupReferences", elemType: statelessrulegroupreference_1.StatelessRuleGroupReference }),
        __metadata("design:type", Array)
    ], FirewallPolicy.prototype, "statelessRuleGroupReferences", void 0);
    return FirewallPolicy;
}(utils_1.SpeakeasyBase));
exports.FirewallPolicy = FirewallPolicy;
