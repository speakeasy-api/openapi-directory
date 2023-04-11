import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyFpgaImageRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    dryRun?: boolean;
    name?: string;
    sourceFpgaImageId: string;
    sourceRegion: string;
}
