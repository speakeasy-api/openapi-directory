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
exports.Quota = void 0;
var utils_1 = require("../../../internal/utils");
var Quota = /** @class */ (function (_super) {
    __extends(Quota, _super);
    function Quota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandwidthLimit" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "bandwidthLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandwidthUsed" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "bandwidthUsed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diskLimit" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "diskLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diskUsed" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "diskUsed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noticeEnabled" }),
        __metadata("design:type", Boolean)
    ], Quota.prototype, "noticeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noticeThreshold" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "noticeThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionsLimit" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "transactionsLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionsNoticeEnabled" }),
        __metadata("design:type", Boolean)
    ], Quota.prototype, "transactionsNoticeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionsNoticeThreshold" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "transactionsNoticeThreshold", void 0);
    return Quota;
}(utils_1.SpeakeasyBase));
exports.Quota = Quota;
