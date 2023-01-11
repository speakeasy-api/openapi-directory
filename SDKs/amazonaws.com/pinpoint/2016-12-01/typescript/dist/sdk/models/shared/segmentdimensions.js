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
exports.SegmentDimensions = void 0;
var utils_1 = require("../../../internal/utils");
var attributedimension_1 = require("./attributedimension");
var segmentbehaviors_1 = require("./segmentbehaviors");
var segmentdemographics_1 = require("./segmentdemographics");
var segmentlocation_1 = require("./segmentlocation");
var metricdimension_1 = require("./metricdimension");
// SegmentDimensions
/**
 * Specifies the dimension settings for a segment.
**/
var SegmentDimensions = /** @class */ (function (_super) {
    __extends(SegmentDimensions, _super);
    function SegmentDimensions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes", elemType: attributedimension_1.AttributeDimension }),
        __metadata("design:type", Object)
    ], SegmentDimensions.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Behavior" }),
        __metadata("design:type", segmentbehaviors_1.SegmentBehaviors)
    ], SegmentDimensions.prototype, "behavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Demographic" }),
        __metadata("design:type", segmentdemographics_1.SegmentDemographics)
    ], SegmentDimensions.prototype, "demographic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Location" }),
        __metadata("design:type", segmentlocation_1.SegmentLocation)
    ], SegmentDimensions.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Metrics", elemType: metricdimension_1.MetricDimension }),
        __metadata("design:type", Object)
    ], SegmentDimensions.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UserAttributes", elemType: attributedimension_1.AttributeDimension }),
        __metadata("design:type", Object)
    ], SegmentDimensions.prototype, "userAttributes", void 0);
    return SegmentDimensions;
}(utils_1.SpeakeasyBase));
exports.SegmentDimensions = SegmentDimensions;
