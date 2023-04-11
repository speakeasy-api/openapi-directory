import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConsentArtifactSchemaConsentData extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtifactSchemaConsentDataConsumer extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtifactSchemaConsentDataProvider extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtifactSchemaConsentPermissionDateRange extends SpeakeasyBase {
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    from: Date;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    to: Date;
}
export declare class ConsentArtifactSchemaConsentPermissionFrequency extends SpeakeasyBase {
    repeats: number;
    unit: string;
    value: number;
}
export declare class ConsentArtifactSchemaConsentPermission extends SpeakeasyBase {
    access: string;
    dateRange: ConsentArtifactSchemaConsentPermissionDateRange;
    frequency: ConsentArtifactSchemaConsentPermissionFrequency;
}
export declare class ConsentArtifactSchemaConsentPurpose extends SpeakeasyBase {
    description: string;
}
export declare class ConsentArtifactSchemaConsentUser extends SpeakeasyBase {
    email: string;
    idNumber: string;
    idType: string;
    mobile: string;
}
export declare class ConsentArtifactSchemaConsent extends SpeakeasyBase {
    /**
     * A unique consent id in UUID format.
     */
    consentId: string;
    data: ConsentArtifactSchemaConsentData;
    dataConsumer: ConsentArtifactSchemaConsentDataConsumer;
    dataProvider: ConsentArtifactSchemaConsentDataProvider;
    permission: ConsentArtifactSchemaConsentPermission;
    purpose: ConsentArtifactSchemaConsentPurpose;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
    user: ConsentArtifactSchemaConsentUser;
}
export declare class ConsentArtifactSchemaSignature extends SpeakeasyBase {
    signature: string;
}
export declare class ConsentArtifactSchema extends SpeakeasyBase {
    consent: ConsentArtifactSchemaConsent;
    signature: ConsentArtifactSchemaSignature;
}
