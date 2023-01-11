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
exports.UnsupportedRuleResponse = exports.UnsupportedRuleResponseTarget = exports.UnsupportedRuleResponseStatusEnum = exports.UnsupportedRuleResponseRuleTypeEnum = exports.UnsupportedRuleResponseRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var UnsupportedRuleResponseRequestModeEnum;
(function (UnsupportedRuleResponseRequestModeEnum) {
    UnsupportedRuleResponseRequestModeEnum["Single"] = "single";
    UnsupportedRuleResponseRequestModeEnum["Batch"] = "batch";
})(UnsupportedRuleResponseRequestModeEnum = exports.UnsupportedRuleResponseRequestModeEnum || (exports.UnsupportedRuleResponseRequestModeEnum = {}));
var UnsupportedRuleResponseRuleTypeEnum;
(function (UnsupportedRuleResponseRuleTypeEnum) {
    UnsupportedRuleResponseRuleTypeEnum["Unsupported"] = "unsupported";
})(UnsupportedRuleResponseRuleTypeEnum = exports.UnsupportedRuleResponseRuleTypeEnum || (exports.UnsupportedRuleResponseRuleTypeEnum = {}));
var UnsupportedRuleResponseStatusEnum;
(function (UnsupportedRuleResponseStatusEnum) {
    UnsupportedRuleResponseStatusEnum["Enabled"] = "enabled";
    UnsupportedRuleResponseStatusEnum["Disabled"] = "disabled";
})(UnsupportedRuleResponseStatusEnum = exports.UnsupportedRuleResponseStatusEnum || (exports.UnsupportedRuleResponseStatusEnum = {}));
var UnsupportedRuleResponseTarget = /** @class */ (function (_super) {
    __extends(UnsupportedRuleResponseTarget, _super);
    function UnsupportedRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UnsupportedRuleResponseTarget.prototype, "url", void 0);
    return UnsupportedRuleResponseTarget;
}(utils_1.SpeakeasyBase));
exports.UnsupportedRuleResponseTarget = UnsupportedRuleResponseTarget;
var UnsupportedRuleResponse = /** @class */ (function (_super) {
    __extends(UnsupportedRuleResponse, _super);
    function UnsupportedRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", Object)
    ], UnsupportedRuleResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], UnsupportedRuleResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], UnsupportedRuleResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UnsupportedRuleResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], UnsupportedRuleResponse.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], UnsupportedRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], UnsupportedRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], UnsupportedRuleResponse.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UnsupportedRuleResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", UnsupportedRuleResponseTarget)
    ], UnsupportedRuleResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UnsupportedRuleResponse.prototype, "version", void 0);
    return UnsupportedRuleResponse;
}(utils_1.SpeakeasyBase));
exports.UnsupportedRuleResponse = UnsupportedRuleResponse;
