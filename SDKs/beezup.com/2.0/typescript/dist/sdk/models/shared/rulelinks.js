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
exports.RuleLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksdeleterulelink_1 = require("./linksdeleterulelink");
var linksdisablerulelink_1 = require("./linksdisablerulelink");
var linksenablerulelink_1 = require("./linksenablerulelink");
var linksmovedownrulelink_1 = require("./linksmovedownrulelink");
var linksmoveuprulelink_1 = require("./linksmoveuprulelink");
var linksgetreportfilterlink_1 = require("./linksgetreportfilterlink");
var linksrunrulelink_1 = require("./linksrunrulelink");
var linksgetrulelink_1 = require("./linksgetrulelink");
var linksupdaterulelink_1 = require("./linksupdaterulelink");
// RuleLinks
/**
 * Links to retrieve/action on other entities
**/
var RuleLinks = /** @class */ (function (_super) {
    __extends(RuleLinks, _super);
    function RuleLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", linksdeleterulelink_1.LinksDeleteRuleLink)
    ], RuleLinks.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disable" }),
        __metadata("design:type", linksdisablerulelink_1.LinksDisableRuleLink)
    ], RuleLinks.prototype, "disable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", linksenablerulelink_1.LinksEnableRuleLink)
    ], RuleLinks.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=movedown" }),
        __metadata("design:type", linksmovedownrulelink_1.LinksMoveDownRuleLink)
    ], RuleLinks.prototype, "movedown", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moveup" }),
        __metadata("design:type", linksmoveuprulelink_1.LinksMoveUpRuleLink)
    ], RuleLinks.prototype, "moveup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportFilter" }),
        __metadata("design:type", linksgetreportfilterlink_1.LinksGetReportFilterLink)
    ], RuleLinks.prototype, "reportFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=run" }),
        __metadata("design:type", linksrunrulelink_1.LinksRunRuleLink)
    ], RuleLinks.prototype, "run", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksgetrulelink_1.LinksGetRuleLink)
    ], RuleLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update" }),
        __metadata("design:type", linksupdaterulelink_1.LinksUpdateRuleLink)
    ], RuleLinks.prototype, "update", void 0);
    return RuleLinks;
}(utils_1.SpeakeasyBase));
exports.RuleLinks = RuleLinks;
