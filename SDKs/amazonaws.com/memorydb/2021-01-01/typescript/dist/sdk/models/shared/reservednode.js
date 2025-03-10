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
exports.ReservedNode = void 0;
var utils_1 = require("../../../internal/utils");
var recurringcharge_1 = require("./recurringcharge");
var class_transformer_1 = require("class-transformer");
/**
 * Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.
 */
var ReservedNode = /** @class */ (function (_super) {
    __extends(ReservedNode, _super);
    function ReservedNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ARN" }),
        __metadata("design:type", String)
    ], ReservedNode.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Duration" }),
        __metadata("design:type", Number)
    ], ReservedNode.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FixedPrice" }),
        __metadata("design:type", Number)
    ], ReservedNode.prototype, "fixedPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "NodeCount" }),
        __metadata("design:type", Number)
    ], ReservedNode.prototype, "nodeCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "NodeType" }),
        __metadata("design:type", String)
    ], ReservedNode.prototype, "nodeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OfferingType" }),
        __metadata("design:type", String)
    ], ReservedNode.prototype, "offeringType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: recurringcharge_1.RecurringCharge }),
        (0, class_transformer_1.Expose)({ name: "RecurringCharges" }),
        (0, class_transformer_1.Type)(function () { return recurringcharge_1.RecurringCharge; }),
        __metadata("design:type", Array)
    ], ReservedNode.prototype, "recurringCharges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ReservationId" }),
        __metadata("design:type", String)
    ], ReservedNode.prototype, "reservationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ReservedNodesOfferingId" }),
        __metadata("design:type", String)
    ], ReservedNode.prototype, "reservedNodesOfferingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "StartTime" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], ReservedNode.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "State" }),
        __metadata("design:type", String)
    ], ReservedNode.prototype, "state", void 0);
    return ReservedNode;
}(utils_1.SpeakeasyBase));
exports.ReservedNode = ReservedNode;
