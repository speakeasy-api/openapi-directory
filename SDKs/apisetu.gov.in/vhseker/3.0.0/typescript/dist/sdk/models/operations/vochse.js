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
exports.VochseResponse = exports.VochseRequest = exports.Vochse504ApplicationJson = exports.Vochse504ApplicationJsonErrorDescriptionEnum = exports.Vochse504ApplicationJsonErrorEnum = exports.Vochse503ApplicationJson = exports.Vochse503ApplicationJsonErrorDescriptionEnum = exports.Vochse503ApplicationJsonErrorEnum = exports.Vochse502ApplicationJson = exports.Vochse502ApplicationJsonErrorDescriptionEnum = exports.Vochse502ApplicationJsonErrorEnum = exports.Vochse500ApplicationJson = exports.Vochse500ApplicationJsonErrorDescriptionEnum = exports.Vochse500ApplicationJsonErrorEnum = exports.Vochse404ApplicationJson = exports.Vochse404ApplicationJsonErrorDescriptionEnum = exports.Vochse404ApplicationJsonErrorEnum = exports.Vochse401ApplicationJson = exports.Vochse401ApplicationJsonErrorDescriptionEnum = exports.Vochse401ApplicationJsonErrorEnum = exports.Vochse400ApplicationJson = exports.Vochse400ApplicationJsonErrorDescriptionEnum = exports.Vochse400ApplicationJsonErrorEnum = exports.VochseSecurity = exports.VochseRequestBody = exports.VochseRequestBodyFormatEnum = exports.VochseRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VochseRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VochseRequestBodyCertificateParameters, _super);
    function VochseRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Regno" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Year" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "year", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "type", void 0);
    return VochseRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.VochseRequestBodyCertificateParameters = VochseRequestBodyCertificateParameters;
var VochseRequestBodyFormatEnum;
(function (VochseRequestBodyFormatEnum) {
    VochseRequestBodyFormatEnum["Pdf"] = "pdf";
})(VochseRequestBodyFormatEnum = exports.VochseRequestBodyFormatEnum || (exports.VochseRequestBodyFormatEnum = {}));
var VochseRequestBody = /** @class */ (function (_super) {
    __extends(VochseRequestBody, _super);
    function VochseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VochseRequestBodyCertificateParameters)
    ], VochseRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VochseRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VochseRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VochseRequestBody.prototype, "txnId", void 0);
    return VochseRequestBody;
}(utils_1.SpeakeasyBase));
exports.VochseRequestBody = VochseRequestBody;
var VochseSecurity = /** @class */ (function (_super) {
    __extends(VochseSecurity, _super);
    function VochseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VochseSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VochseSecurity.prototype, "clientId", void 0);
    return VochseSecurity;
}(utils_1.SpeakeasyBase));
exports.VochseSecurity = VochseSecurity;
var Vochse400ApplicationJsonErrorEnum;
(function (Vochse400ApplicationJsonErrorEnum) {
    Vochse400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vochse400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vochse400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vochse400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vochse400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vochse400ApplicationJsonErrorEnum = exports.Vochse400ApplicationJsonErrorEnum || (exports.Vochse400ApplicationJsonErrorEnum = {}));
var Vochse400ApplicationJsonErrorDescriptionEnum;
(function (Vochse400ApplicationJsonErrorDescriptionEnum) {
    Vochse400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vochse400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vochse400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vochse400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vochse400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vochse400ApplicationJsonErrorDescriptionEnum = exports.Vochse400ApplicationJsonErrorDescriptionEnum || (exports.Vochse400ApplicationJsonErrorDescriptionEnum = {}));
var Vochse400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse400ApplicationJson, _super);
    function Vochse400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse400ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vochse400ApplicationJson = Vochse400ApplicationJson;
var Vochse401ApplicationJsonErrorEnum;
(function (Vochse401ApplicationJsonErrorEnum) {
    Vochse401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vochse401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vochse401ApplicationJsonErrorEnum = exports.Vochse401ApplicationJsonErrorEnum || (exports.Vochse401ApplicationJsonErrorEnum = {}));
var Vochse401ApplicationJsonErrorDescriptionEnum;
(function (Vochse401ApplicationJsonErrorDescriptionEnum) {
    Vochse401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vochse401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vochse401ApplicationJsonErrorDescriptionEnum = exports.Vochse401ApplicationJsonErrorDescriptionEnum || (exports.Vochse401ApplicationJsonErrorDescriptionEnum = {}));
var Vochse401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse401ApplicationJson, _super);
    function Vochse401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse401ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vochse401ApplicationJson = Vochse401ApplicationJson;
var Vochse404ApplicationJsonErrorEnum;
(function (Vochse404ApplicationJsonErrorEnum) {
    Vochse404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vochse404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vochse404ApplicationJsonErrorEnum = exports.Vochse404ApplicationJsonErrorEnum || (exports.Vochse404ApplicationJsonErrorEnum = {}));
var Vochse404ApplicationJsonErrorDescriptionEnum;
(function (Vochse404ApplicationJsonErrorDescriptionEnum) {
    Vochse404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vochse404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vochse404ApplicationJsonErrorDescriptionEnum = exports.Vochse404ApplicationJsonErrorDescriptionEnum || (exports.Vochse404ApplicationJsonErrorDescriptionEnum = {}));
var Vochse404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse404ApplicationJson, _super);
    function Vochse404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse404ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vochse404ApplicationJson = Vochse404ApplicationJson;
var Vochse500ApplicationJsonErrorEnum;
(function (Vochse500ApplicationJsonErrorEnum) {
    Vochse500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vochse500ApplicationJsonErrorEnum = exports.Vochse500ApplicationJsonErrorEnum || (exports.Vochse500ApplicationJsonErrorEnum = {}));
var Vochse500ApplicationJsonErrorDescriptionEnum;
(function (Vochse500ApplicationJsonErrorDescriptionEnum) {
    Vochse500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vochse500ApplicationJsonErrorDescriptionEnum = exports.Vochse500ApplicationJsonErrorDescriptionEnum || (exports.Vochse500ApplicationJsonErrorDescriptionEnum = {}));
var Vochse500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse500ApplicationJson, _super);
    function Vochse500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse500ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vochse500ApplicationJson = Vochse500ApplicationJson;
var Vochse502ApplicationJsonErrorEnum;
(function (Vochse502ApplicationJsonErrorEnum) {
    Vochse502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vochse502ApplicationJsonErrorEnum = exports.Vochse502ApplicationJsonErrorEnum || (exports.Vochse502ApplicationJsonErrorEnum = {}));
var Vochse502ApplicationJsonErrorDescriptionEnum;
(function (Vochse502ApplicationJsonErrorDescriptionEnum) {
    Vochse502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vochse502ApplicationJsonErrorDescriptionEnum = exports.Vochse502ApplicationJsonErrorDescriptionEnum || (exports.Vochse502ApplicationJsonErrorDescriptionEnum = {}));
var Vochse502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse502ApplicationJson, _super);
    function Vochse502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse502ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vochse502ApplicationJson = Vochse502ApplicationJson;
var Vochse503ApplicationJsonErrorEnum;
(function (Vochse503ApplicationJsonErrorEnum) {
    Vochse503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vochse503ApplicationJsonErrorEnum = exports.Vochse503ApplicationJsonErrorEnum || (exports.Vochse503ApplicationJsonErrorEnum = {}));
var Vochse503ApplicationJsonErrorDescriptionEnum;
(function (Vochse503ApplicationJsonErrorDescriptionEnum) {
    Vochse503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vochse503ApplicationJsonErrorDescriptionEnum = exports.Vochse503ApplicationJsonErrorDescriptionEnum || (exports.Vochse503ApplicationJsonErrorDescriptionEnum = {}));
var Vochse503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse503ApplicationJson, _super);
    function Vochse503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse503ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vochse503ApplicationJson = Vochse503ApplicationJson;
var Vochse504ApplicationJsonErrorEnum;
(function (Vochse504ApplicationJsonErrorEnum) {
    Vochse504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vochse504ApplicationJsonErrorEnum = exports.Vochse504ApplicationJsonErrorEnum || (exports.Vochse504ApplicationJsonErrorEnum = {}));
var Vochse504ApplicationJsonErrorDescriptionEnum;
(function (Vochse504ApplicationJsonErrorDescriptionEnum) {
    Vochse504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vochse504ApplicationJsonErrorDescriptionEnum = exports.Vochse504ApplicationJsonErrorDescriptionEnum || (exports.Vochse504ApplicationJsonErrorDescriptionEnum = {}));
var Vochse504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse504ApplicationJson, _super);
    function Vochse504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse504ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vochse504ApplicationJson = Vochse504ApplicationJson;
var VochseRequest = /** @class */ (function (_super) {
    __extends(VochseRequest, _super);
    function VochseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", VochseRequestBody)
    ], VochseRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VochseSecurity)
    ], VochseRequest.prototype, "security", void 0);
    return VochseRequest;
}(utils_1.SpeakeasyBase));
exports.VochseRequest = VochseRequest;
var VochseResponse = /** @class */ (function (_super) {
    __extends(VochseResponse, _super);
    function VochseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VochseResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VochseResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vochse400ApplicationJson)
    ], VochseResponse.prototype, "vochse400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vochse401ApplicationJson)
    ], VochseResponse.prototype, "vochse401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vochse404ApplicationJson)
    ], VochseResponse.prototype, "vochse404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vochse500ApplicationJson)
    ], VochseResponse.prototype, "vochse500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vochse502ApplicationJson)
    ], VochseResponse.prototype, "vochse502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vochse503ApplicationJson)
    ], VochseResponse.prototype, "vochse503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vochse504ApplicationJson)
    ], VochseResponse.prototype, "vochse504ApplicationJSONObject", void 0);
    return VochseResponse;
}(utils_1.SpeakeasyBase));
exports.VochseResponse = VochseResponse;
