import { SpeakeasyBase } from "../../../internal/utils";
import { EojDataSourceConfigInput } from "./eojdatasourceconfiginput";
import { RasterDataCollectionQueryOutput } from "./rasterdatacollectionqueryoutput";
/**
 * The InputConfig for an EarthObservationJob response.
 */
export declare class InputConfigOutput extends SpeakeasyBase {
    dataSourceConfig?: EojDataSourceConfigInput;
    previousEarthObservationJobArn?: string;
    rasterDataCollectionQuery?: RasterDataCollectionQueryOutput;
}
