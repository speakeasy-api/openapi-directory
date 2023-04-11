import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnableImageDeprecationRequest extends SpeakeasyBase {
    deprecateAt: Date;
    dryRun?: boolean;
    imageId: string;
}
