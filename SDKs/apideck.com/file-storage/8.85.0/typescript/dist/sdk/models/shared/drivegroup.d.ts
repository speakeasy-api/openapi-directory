import { SpeakeasyBase } from "../../../internal/utils";
export declare class DriveGroup extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    displayName?: string;
    id: string;
    name: string;
    updatedAt?: Date;
    updatedBy?: string;
}
export declare class DriveGroupInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name: string;
}
