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
exports.TargetGroupPairInfo = void 0;
var utils_1 = require("../../../internal/utils");
var trafficroute_1 = require("./trafficroute");
var targetgroupinfo_1 = require("./targetgroupinfo");
// TargetGroupPairInfo
/**
 *  Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.
**/
var TargetGroupPairInfo = /** @class */ (function (_super) {
    __extends(TargetGroupPairInfo, _super);
    function TargetGroupPairInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prodTrafficRoute" }),
        __metadata("design:type", trafficroute_1.TrafficRoute)
    ], TargetGroupPairInfo.prototype, "prodTrafficRoute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetGroups", elemType: targetgroupinfo_1.TargetGroupInfo }),
        __metadata("design:type", Array)
    ], TargetGroupPairInfo.prototype, "targetGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=testTrafficRoute" }),
        __metadata("design:type", trafficroute_1.TrafficRoute)
    ], TargetGroupPairInfo.prototype, "testTrafficRoute", void 0);
    return TargetGroupPairInfo;
}(utils_1.SpeakeasyBase));
exports.TargetGroupPairInfo = TargetGroupPairInfo;
