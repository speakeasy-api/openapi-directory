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
exports.DoctorMessage = exports.DoctorMessageTypeEnum = exports.DoctorMessageMessageNote = void 0;
var utils_1 = require("../../../internal/utils");
// DoctorMessageMessageNote
/**
 * Additional note
**/
var DoctorMessageMessageNote = /** @class */ (function (_super) {
    __extends(DoctorMessageMessageNote, _super);
    function DoctorMessageMessageNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], DoctorMessageMessageNote.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], DoctorMessageMessageNote.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], DoctorMessageMessageNote.prototype, "text", void 0);
    return DoctorMessageMessageNote;
}(utils_1.SpeakeasyBase));
exports.DoctorMessageMessageNote = DoctorMessageMessageNote;
var DoctorMessageTypeEnum;
(function (DoctorMessageTypeEnum) {
    DoctorMessageTypeEnum["Gp"] = "GP";
    DoctorMessageTypeEnum["Gc"] = "GC";
    DoctorMessageTypeEnum["Gt"] = "GT";
    DoctorMessageTypeEnum["Gz"] = "GZ";
    DoctorMessageTypeEnum["If"] = "IF";
    DoctorMessageTypeEnum["Of"] = "OF";
    DoctorMessageTypeEnum["Il"] = "IL";
    DoctorMessageTypeEnum["Ir"] = "IR";
    DoctorMessageTypeEnum["Or"] = "OR";
    DoctorMessageTypeEnum["Ie"] = "IE";
    DoctorMessageTypeEnum["Oa"] = "OA";
    DoctorMessageTypeEnum["Po"] = "PO";
    DoctorMessageTypeEnum["Pi"] = "PI";
    DoctorMessageTypeEnum["Pm"] = "PM";
    DoctorMessageTypeEnum["Oo"] = "OO";
    DoctorMessageTypeEnum["Od"] = "OD";
    DoctorMessageTypeEnum["Id"] = "ID";
    DoctorMessageTypeEnum["Dl"] = "DL";
    DoctorMessageTypeEnum["Cn"] = "CN";
})(DoctorMessageTypeEnum = exports.DoctorMessageTypeEnum || (exports.DoctorMessageTypeEnum = {}));
var DoctorMessage = /** @class */ (function (_super) {
    __extends(DoctorMessage, _super);
    function DoctorMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], DoctorMessage.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachment" }),
        __metadata("design:type", String)
    ], DoctorMessage.prototype, "attachment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", Number)
    ], DoctorMessage.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DoctorMessage.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_notes", elemType: DoctorMessageMessageNote }),
        __metadata("design:type", Array)
    ], DoctorMessage.prototype, "messageNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], DoctorMessage.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", Number)
    ], DoctorMessage.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=read" }),
        __metadata("design:type", Boolean)
    ], DoctorMessage.prototype, "read", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", String)
    ], DoctorMessage.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responsible_user" }),
        __metadata("design:type", String)
    ], DoctorMessage.prototype, "responsibleUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=starred" }),
        __metadata("design:type", Boolean)
    ], DoctorMessage.prototype, "starred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DoctorMessage.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DoctorMessage.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], DoctorMessage.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflow_step" }),
        __metadata("design:type", String)
    ], DoctorMessage.prototype, "workflowStep", void 0);
    return DoctorMessage;
}(utils_1.SpeakeasyBase));
exports.DoctorMessage = DoctorMessage;
