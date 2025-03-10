"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GroupsV2GroupPotentialMembershipSearchResponse = void 0;
var utils_1 = require("../../../internal/utils");
var groupsv2grouppotentialmembership_1 = require("./groupsv2grouppotentialmembership");
var queriespagedquery_1 = require("./queriespagedquery");
var GroupsV2GroupPotentialMembershipSearchResponse = /** @class */ (function (_super) {
    __extends(GroupsV2GroupPotentialMembershipSearchResponse, _super);
    function GroupsV2GroupPotentialMembershipSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], GroupsV2GroupPotentialMembershipSearchResponse.prototype, "hasMore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", queriespagedquery_1.QueriesPagedQuery)
    ], GroupsV2GroupPotentialMembershipSearchResponse.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GroupsV2GroupPotentialMembershipSearchResponse.prototype, "replacementContinuationToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: groupsv2grouppotentialmembership_1.GroupsV2GroupPotentialMembership }),
        __metadata("design:type", Array)
    ], GroupsV2GroupPotentialMembershipSearchResponse.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GroupsV2GroupPotentialMembershipSearchResponse.prototype, "totalResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], GroupsV2GroupPotentialMembershipSearchResponse.prototype, "useTotalResults", void 0);
    return GroupsV2GroupPotentialMembershipSearchResponse;
}(utils_1.SpeakeasyBase));
exports.GroupsV2GroupPotentialMembershipSearchResponse = GroupsV2GroupPotentialMembershipSearchResponse;
