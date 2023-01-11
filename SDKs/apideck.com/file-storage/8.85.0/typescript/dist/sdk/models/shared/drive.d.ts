import { SpeakeasyBase } from "../../../internal/utils";
export declare class Drive extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    id: string;
    name: string;
    updatedAt?: Date;
    updatedBy?: string;
}
export declare class DriveInput extends SpeakeasyBase {
    description?: string;
    name: string;
}
