import { SpeakeasyBase } from "../../../internal/utils";
import { DevEndpointCustomLibraries } from "./devendpointcustomlibraries";
export declare class UpdateDevEndpointRequest extends SpeakeasyBase {
    addArguments?: Record<string, string>;
    addPublicKeys?: string[];
    customLibraries?: DevEndpointCustomLibraries;
    deleteArguments?: string[];
    deletePublicKeys?: string[];
    endpointName: string;
    publicKey?: string;
    updateEtlLibraries?: boolean;
}
