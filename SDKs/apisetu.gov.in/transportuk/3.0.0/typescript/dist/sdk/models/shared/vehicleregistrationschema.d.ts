import { SpeakeasyBase } from "../../../internal/utils";
export declare class VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance extends SpeakeasyBase {
    companyName?: string;
    policyNo?: string;
    validTill?: string;
}
export declare class VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle extends SpeakeasyBase {
    chasisNo?: string;
    class?: Record<string, any>;
    color?: string;
    cubicCapacity?: Record<string, any>;
    cylinder?: Record<string, any>;
    engineNo?: string;
    fitTill?: Record<string, any>;
    fuelDesc?: Record<string, any>;
    make?: Record<string, any>;
    mfgDate?: Record<string, any>;
    model?: string;
    seatCapacity?: string;
    sleeperCapacity?: string;
    standingCapacity?: Record<string, any>;
    unladenWeight?: string;
    wheelbase?: Record<string, any>;
}
export declare class VehicleRegistrationSchemaCertificateDataVehicleRegistration extends SpeakeasyBase {
    insurance?: VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance;
    vehicle?: VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle;
    financer: string;
    normsDesc: string;
    statusDate: string;
}
export declare class VehicleRegistrationSchemaCertificateData extends SpeakeasyBase {
    vehicleRegistration?: VehicleRegistrationSchemaCertificateDataVehicleRegistration;
}
export declare class VehicleRegistrationSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
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
export declare class VehicleRegistrationSchemaIssuedByOrganization extends SpeakeasyBase {
    address: VehicleRegistrationSchemaIssuedByOrganizationAddress;
    code: string;
    name: string;
    tin: string;
    type: string;
    uid: string;
}
export declare class VehicleRegistrationSchemaIssuedBy extends SpeakeasyBase {
    organization: VehicleRegistrationSchemaIssuedByOrganization;
}
export declare class VehicleRegistrationSchemaIssuedToPersonAddress extends SpeakeasyBase {
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
export declare class VehicleRegistrationSchemaIssuedToPersonPhoto extends SpeakeasyBase {
    format: string;
}
export declare class VehicleRegistrationSchemaIssuedToPerson extends SpeakeasyBase {
    address: VehicleRegistrationSchemaIssuedToPersonAddress;
    photo: VehicleRegistrationSchemaIssuedToPersonPhoto;
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
export declare class VehicleRegistrationSchemaIssuedTo extends SpeakeasyBase {
    person: VehicleRegistrationSchemaIssuedToPerson;
}
export declare class VehicleRegistrationSchema extends SpeakeasyBase {
    certificateData: VehicleRegistrationSchemaCertificateData;
    issuedBy: VehicleRegistrationSchemaIssuedBy;
    issuedTo: VehicleRegistrationSchemaIssuedTo;
    expiryDate?: string;
    issueDate: string;
    issuedAt: string;
    language: string;
    name: string;
    number: number;
    status: string;
    type: string;
    validFromDate: string;
}
