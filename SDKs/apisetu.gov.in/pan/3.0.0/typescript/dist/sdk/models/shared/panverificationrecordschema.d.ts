import { SpeakeasyBase } from "../../../internal/utils";
export declare class PANVerificationRecordSchemaCertificateDataPANVerificationRecord extends SpeakeasyBase {
    num: string;
    verifiedOn: string;
}
export declare class PANVerificationRecordSchemaCertificateData extends SpeakeasyBase {
    panVerificationRecord?: PANVerificationRecordSchemaCertificateDataPANVerificationRecord;
}
export declare class PANVerificationRecordSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
    country: string;
    district: string;
    house: string;
    landmark: string;
    line1: string;
    line2: string;
    locality: string;
    pin: string;
    state: string;
    type: string;
    vtc: string;
}
export declare class PANVerificationRecordSchemaIssuedByOrganization extends SpeakeasyBase {
    address: PANVerificationRecordSchemaIssuedByOrganizationAddress;
    code: string;
    name: string;
    tin: string;
    type: string;
    uid: string;
}
export declare class PANVerificationRecordSchemaIssuedBy extends SpeakeasyBase {
    organization: PANVerificationRecordSchemaIssuedByOrganization;
}
export declare class PANVerificationRecordSchemaIssuedToPersonAddress extends SpeakeasyBase {
    country: string;
    district: string;
    house: string;
    landmark: string;
    line1: string;
    line2: string;
    locality: string;
    pin: string;
    state: string;
    type: string;
    vtc: string;
}
export declare class PANVerificationRecordSchemaIssuedToPersonPhoto extends SpeakeasyBase {
    format: string;
}
export declare class PANVerificationRecordSchemaIssuedToPerson extends SpeakeasyBase {
    address: PANVerificationRecordSchemaIssuedToPersonAddress;
    photo: PANVerificationRecordSchemaIssuedToPersonPhoto;
    dob: string;
    email: string;
    gender: string;
    maritalStatus: string;
    name: string;
    phone: string;
    religion: string;
    swd: string;
    swdIndicator: string;
    title: string;
    uid: string;
}
export declare class PANVerificationRecordSchemaIssuedTo extends SpeakeasyBase {
    person: PANVerificationRecordSchemaIssuedToPerson;
}
/**
 * The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
 */
export declare class PANVerificationRecordSchema extends SpeakeasyBase {
    certificateData: PANVerificationRecordSchemaCertificateData;
    issuedBy: PANVerificationRecordSchemaIssuedBy;
    issuedTo: PANVerificationRecordSchemaIssuedTo;
    issueDate: string;
    issuedAt: string;
    language: string;
    name: string;
    number: string;
    status: string;
    type: string;
    validFromDate: string;
}
