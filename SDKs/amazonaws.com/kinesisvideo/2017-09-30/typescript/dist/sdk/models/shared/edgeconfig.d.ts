import { SpeakeasyBase } from "../../../internal/utils";
import { DeletionConfig } from "./deletionconfig";
import { RecorderConfig } from "./recorderconfig";
import { UploaderConfig } from "./uploaderconfig";
/**
 * A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.
 */
export declare class EdgeConfig extends SpeakeasyBase {
    deletionConfig?: DeletionConfig;
    hubDeviceArn: string;
    recorderConfig: RecorderConfig;
    uploaderConfig?: UploaderConfig;
}
