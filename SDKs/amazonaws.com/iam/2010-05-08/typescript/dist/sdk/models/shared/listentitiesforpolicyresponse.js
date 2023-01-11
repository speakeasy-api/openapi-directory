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
exports.ListEntitiesForPolicyResponse = void 0;
var utils_1 = require("../../../internal/utils");
var policygroup_1 = require("./policygroup");
var policyrole_1 = require("./policyrole");
var policyuser_1 = require("./policyuser");
// ListEntitiesForPolicyResponse
/**
 * Contains the response to a successful <a>ListEntitiesForPolicy</a> request.
**/
var ListEntitiesForPolicyResponse = /** @class */ (function (_super) {
    __extends(ListEntitiesForPolicyResponse, _super);
    function ListEntitiesForPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], ListEntitiesForPolicyResponse.prototype, "isTruncated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEntitiesForPolicyResponse.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: policygroup_1.PolicyGroup }),
        __metadata("design:type", Array)
    ], ListEntitiesForPolicyResponse.prototype, "policyGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: policyrole_1.PolicyRole }),
        __metadata("design:type", Array)
    ], ListEntitiesForPolicyResponse.prototype, "policyRoles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: policyuser_1.PolicyUser }),
        __metadata("design:type", Array)
    ], ListEntitiesForPolicyResponse.prototype, "policyUsers", void 0);
    return ListEntitiesForPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.ListEntitiesForPolicyResponse = ListEntitiesForPolicyResponse;
