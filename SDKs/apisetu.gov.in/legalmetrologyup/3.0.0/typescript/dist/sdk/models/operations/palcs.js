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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalcsResponse = exports.PalcsRequest = exports.Palcs504ApplicationJson = exports.Palcs504ApplicationJsonErrorDescriptionEnum = exports.Palcs504ApplicationJsonErrorEnum = exports.Palcs503ApplicationJson = exports.Palcs503ApplicationJsonErrorDescriptionEnum = exports.Palcs503ApplicationJsonErrorEnum = exports.Palcs502ApplicationJson = exports.Palcs502ApplicationJsonErrorDescriptionEnum = exports.Palcs502ApplicationJsonErrorEnum = exports.Palcs500ApplicationJson = exports.Palcs500ApplicationJsonErrorDescriptionEnum = exports.Palcs500ApplicationJsonErrorEnum = exports.Palcs404ApplicationJson = exports.Palcs404ApplicationJsonErrorDescriptionEnum = exports.Palcs404ApplicationJsonErrorEnum = exports.Palcs401ApplicationJson = exports.Palcs401ApplicationJsonErrorDescriptionEnum = exports.Palcs401ApplicationJsonErrorEnum = exports.Palcs400ApplicationJson = exports.Palcs400ApplicationJsonErrorDescriptionEnum = exports.Palcs400ApplicationJsonErrorEnum = exports.PalcsSecurity = exports.PalcsRequestBody = exports.PalcsRequestBodyFormatEnum = exports.PalcsRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PalcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PalcsRequestBodyCertificateParameters, _super);
    function PalcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applicationNo" }),
        __metadata("design:type", String)
    ], PalcsRequestBodyCertificateParameters.prototype, "applicationNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=licenseNo" }),
        __metadata("design:type", String)
    ], PalcsRequestBodyCertificateParameters.prototype, "licenseNo", void 0);
    return PalcsRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PalcsRequestBodyCertificateParameters = PalcsRequestBodyCertificateParameters;
var PalcsRequestBodyFormatEnum;
(function (PalcsRequestBodyFormatEnum) {
    PalcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(PalcsRequestBodyFormatEnum = exports.PalcsRequestBodyFormatEnum || (exports.PalcsRequestBodyFormatEnum = {}));
var PalcsRequestBody = /** @class */ (function (_super) {
    __extends(PalcsRequestBody, _super);
    function PalcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PalcsRequestBodyCertificateParameters)
    ], PalcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PalcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PalcsRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PalcsRequestBody.prototype, "txnId", void 0);
    return PalcsRequestBody;
}(utils_1.SpeakeasyBase));
exports.PalcsRequestBody = PalcsRequestBody;
var PalcsSecurity = /** @class */ (function (_super) {
    __extends(PalcsSecurity, _super);
    function PalcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PalcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PalcsSecurity.prototype, "clientId", void 0);
    return PalcsSecurity;
}(utils_1.SpeakeasyBase));
exports.PalcsSecurity = PalcsSecurity;
var Palcs400ApplicationJsonErrorEnum;
(function (Palcs400ApplicationJsonErrorEnum) {
    Palcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Palcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Palcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Palcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Palcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Palcs400ApplicationJsonErrorEnum = exports.Palcs400ApplicationJsonErrorEnum || (exports.Palcs400ApplicationJsonErrorEnum = {}));
var Palcs400ApplicationJsonErrorDescriptionEnum;
(function (Palcs400ApplicationJsonErrorDescriptionEnum) {
    Palcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Palcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Palcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Palcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Palcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Palcs400ApplicationJsonErrorDescriptionEnum = exports.Palcs400ApplicationJsonErrorDescriptionEnum || (exports.Palcs400ApplicationJsonErrorDescriptionEnum = {}));
var Palcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs400ApplicationJson, _super);
    function Palcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Palcs400ApplicationJson = Palcs400ApplicationJson;
var Palcs401ApplicationJsonErrorEnum;
(function (Palcs401ApplicationJsonErrorEnum) {
    Palcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Palcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Palcs401ApplicationJsonErrorEnum = exports.Palcs401ApplicationJsonErrorEnum || (exports.Palcs401ApplicationJsonErrorEnum = {}));
var Palcs401ApplicationJsonErrorDescriptionEnum;
(function (Palcs401ApplicationJsonErrorDescriptionEnum) {
    Palcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Palcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Palcs401ApplicationJsonErrorDescriptionEnum = exports.Palcs401ApplicationJsonErrorDescriptionEnum || (exports.Palcs401ApplicationJsonErrorDescriptionEnum = {}));
var Palcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs401ApplicationJson, _super);
    function Palcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Palcs401ApplicationJson = Palcs401ApplicationJson;
var Palcs404ApplicationJsonErrorEnum;
(function (Palcs404ApplicationJsonErrorEnum) {
    Palcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Palcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Palcs404ApplicationJsonErrorEnum = exports.Palcs404ApplicationJsonErrorEnum || (exports.Palcs404ApplicationJsonErrorEnum = {}));
var Palcs404ApplicationJsonErrorDescriptionEnum;
(function (Palcs404ApplicationJsonErrorDescriptionEnum) {
    Palcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Palcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Palcs404ApplicationJsonErrorDescriptionEnum = exports.Palcs404ApplicationJsonErrorDescriptionEnum || (exports.Palcs404ApplicationJsonErrorDescriptionEnum = {}));
var Palcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs404ApplicationJson, _super);
    function Palcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Palcs404ApplicationJson = Palcs404ApplicationJson;
var Palcs500ApplicationJsonErrorEnum;
(function (Palcs500ApplicationJsonErrorEnum) {
    Palcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Palcs500ApplicationJsonErrorEnum = exports.Palcs500ApplicationJsonErrorEnum || (exports.Palcs500ApplicationJsonErrorEnum = {}));
var Palcs500ApplicationJsonErrorDescriptionEnum;
(function (Palcs500ApplicationJsonErrorDescriptionEnum) {
    Palcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Palcs500ApplicationJsonErrorDescriptionEnum = exports.Palcs500ApplicationJsonErrorDescriptionEnum || (exports.Palcs500ApplicationJsonErrorDescriptionEnum = {}));
var Palcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs500ApplicationJson, _super);
    function Palcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Palcs500ApplicationJson = Palcs500ApplicationJson;
var Palcs502ApplicationJsonErrorEnum;
(function (Palcs502ApplicationJsonErrorEnum) {
    Palcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Palcs502ApplicationJsonErrorEnum = exports.Palcs502ApplicationJsonErrorEnum || (exports.Palcs502ApplicationJsonErrorEnum = {}));
var Palcs502ApplicationJsonErrorDescriptionEnum;
(function (Palcs502ApplicationJsonErrorDescriptionEnum) {
    Palcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Palcs502ApplicationJsonErrorDescriptionEnum = exports.Palcs502ApplicationJsonErrorDescriptionEnum || (exports.Palcs502ApplicationJsonErrorDescriptionEnum = {}));
var Palcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs502ApplicationJson, _super);
    function Palcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Palcs502ApplicationJson = Palcs502ApplicationJson;
var Palcs503ApplicationJsonErrorEnum;
(function (Palcs503ApplicationJsonErrorEnum) {
    Palcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Palcs503ApplicationJsonErrorEnum = exports.Palcs503ApplicationJsonErrorEnum || (exports.Palcs503ApplicationJsonErrorEnum = {}));
var Palcs503ApplicationJsonErrorDescriptionEnum;
(function (Palcs503ApplicationJsonErrorDescriptionEnum) {
    Palcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Palcs503ApplicationJsonErrorDescriptionEnum = exports.Palcs503ApplicationJsonErrorDescriptionEnum || (exports.Palcs503ApplicationJsonErrorDescriptionEnum = {}));
var Palcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs503ApplicationJson, _super);
    function Palcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Palcs503ApplicationJson = Palcs503ApplicationJson;
var Palcs504ApplicationJsonErrorEnum;
(function (Palcs504ApplicationJsonErrorEnum) {
    Palcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Palcs504ApplicationJsonErrorEnum = exports.Palcs504ApplicationJsonErrorEnum || (exports.Palcs504ApplicationJsonErrorEnum = {}));
var Palcs504ApplicationJsonErrorDescriptionEnum;
(function (Palcs504ApplicationJsonErrorDescriptionEnum) {
    Palcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Palcs504ApplicationJsonErrorDescriptionEnum = exports.Palcs504ApplicationJsonErrorDescriptionEnum || (exports.Palcs504ApplicationJsonErrorDescriptionEnum = {}));
var Palcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs504ApplicationJson, _super);
    function Palcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Palcs504ApplicationJson = Palcs504ApplicationJson;
var PalcsRequest = /** @class */ (function (_super) {
    __extends(PalcsRequest, _super);
    function PalcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PalcsRequestBody)
    ], PalcsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PalcsSecurity)
    ], PalcsRequest.prototype, "security", void 0);
    return PalcsRequest;
}(utils_1.SpeakeasyBase));
exports.PalcsRequest = PalcsRequest;
var PalcsResponse = /** @class */ (function (_super) {
    __extends(PalcsResponse, _super);
    function PalcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PalcsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PalcsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Palcs400ApplicationJson)
    ], PalcsResponse.prototype, "palcs400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Palcs401ApplicationJson)
    ], PalcsResponse.prototype, "palcs401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Palcs404ApplicationJson)
    ], PalcsResponse.prototype, "palcs404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Palcs500ApplicationJson)
    ], PalcsResponse.prototype, "palcs500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Palcs502ApplicationJson)
    ], PalcsResponse.prototype, "palcs502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Palcs503ApplicationJson)
    ], PalcsResponse.prototype, "palcs503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Palcs504ApplicationJson)
    ], PalcsResponse.prototype, "palcs504ApplicationJSONObject", void 0);
    return PalcsResponse;
}(utils_1.SpeakeasyBase));
exports.PalcsResponse = PalcsResponse;
