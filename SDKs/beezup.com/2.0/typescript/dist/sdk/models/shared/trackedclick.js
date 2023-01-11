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
exports.TrackedClick = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommonchannelbasicinfo_1 = require("./beezupcommonchannelbasicinfo");
var beezupcommonproductbasicinfo_1 = require("./beezupcommonproductbasicinfo");
var TrackedClick = /** @class */ (function (_super) {
    __extends(TrackedClick, _super);
    function TrackedClick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", beezupcommonchannelbasicinfo_1.BeezUpCommonChannelBasicInfo)
    ], TrackedClick.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], TrackedClick.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", beezupcommonproductbasicinfo_1.BeezUpCommonProductBasicInfo)
    ], TrackedClick.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=utcDate" }),
        __metadata("design:type", Date)
    ], TrackedClick.prototype, "utcDate", void 0);
    return TrackedClick;
}(utils_1.SpeakeasyBase));
exports.TrackedClick = TrackedClick;
