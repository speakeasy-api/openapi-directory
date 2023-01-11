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
exports.CreateCapacityReservationResult = exports.CreateCapacityReservationResultCapacityReservation = void 0;
var utils_1 = require("../../../internal/utils");
// CreateCapacityReservationResultCapacityReservation
/**
 * Information about the Capacity Reservation.
**/
var CreateCapacityReservationResultCapacityReservation = /** @class */ (function (_super) {
    __extends(CreateCapacityReservationResultCapacityReservation, _super);
    function CreateCapacityReservationResultCapacityReservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "availabilityZoneId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "availableInstanceCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "capacityReservationArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "capacityReservationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "ebsOptimized", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "endDateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "ephemeralStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "instanceMatchCriteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "instancePlatform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "instanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "outpostArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "tenancy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCapacityReservationResultCapacityReservation.prototype, "totalInstanceCount", void 0);
    return CreateCapacityReservationResultCapacityReservation;
}(utils_1.SpeakeasyBase));
exports.CreateCapacityReservationResultCapacityReservation = CreateCapacityReservationResultCapacityReservation;
var CreateCapacityReservationResult = /** @class */ (function (_super) {
    __extends(CreateCapacityReservationResult, _super);
    function CreateCapacityReservationResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCapacityReservationResultCapacityReservation)
    ], CreateCapacityReservationResult.prototype, "capacityReservation", void 0);
    return CreateCapacityReservationResult;
}(utils_1.SpeakeasyBase));
exports.CreateCapacityReservationResult = CreateCapacityReservationResult;
