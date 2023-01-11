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
exports.PrescriptionMessage = exports.PrescriptionMessageMessageDirectionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PrescriptionMessageMessageDirectionEnum;
(function (PrescriptionMessageMessageDirectionEnum) {
    PrescriptionMessageMessageDirectionEnum["I"] = "I";
    PrescriptionMessageMessageDirectionEnum["O"] = "O";
})(PrescriptionMessageMessageDirectionEnum = exports.PrescriptionMessageMessageDirectionEnum || (exports.PrescriptionMessageMessageDirectionEnum = {}));
var PrescriptionMessage = /** @class */ (function (_super) {
    __extends(PrescriptionMessage, _super);
    function PrescriptionMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PrescriptionMessage.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", Number)
    ], PrescriptionMessage.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PrescriptionMessage.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=json_data" }),
        __metadata("design:type", String)
    ], PrescriptionMessage.prototype, "jsonData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_direction" }),
        __metadata("design:type", String)
    ], PrescriptionMessage.prototype, "messageDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_status" }),
        __metadata("design:type", String)
    ], PrescriptionMessage.prototype, "messageStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], PrescriptionMessage.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_message" }),
        __metadata("design:type", String)
    ], PrescriptionMessage.prototype, "parentMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", Number)
    ], PrescriptionMessage.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pharmacy" }),
        __metadata("design:type", String)
    ], PrescriptionMessage.prototype, "pharmacy", void 0);
    return PrescriptionMessage;
}(utils_1.SpeakeasyBase));
exports.PrescriptionMessage = PrescriptionMessage;
