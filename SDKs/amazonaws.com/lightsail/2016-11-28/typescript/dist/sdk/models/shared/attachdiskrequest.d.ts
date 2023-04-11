import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachDiskRequest extends SpeakeasyBase {
    autoMounting?: boolean;
    diskName: string;
    diskPath: string;
    instanceName: string;
}
