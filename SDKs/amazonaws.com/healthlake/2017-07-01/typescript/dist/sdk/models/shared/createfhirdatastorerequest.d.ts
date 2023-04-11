import { SpeakeasyBase } from "../../../internal/utils";
import { FHIRVersionEnum } from "./fhirversionenum";
import { PreloadDataConfig } from "./preloaddataconfig";
import { SseConfiguration } from "./sseconfiguration";
import { Tag } from "./tag";
export declare class CreateFHIRDatastoreRequest extends SpeakeasyBase {
    clientToken?: string;
    datastoreName?: string;
    datastoreTypeVersion: FHIRVersionEnum;
    preloadDataConfig?: PreloadDataConfig;
    sseConfiguration?: SseConfiguration;
    tags?: Tag[];
}
