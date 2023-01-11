import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Classification } from "./classification";
import { ClassificationInclusion } from "./classificationinclusion";
import { Credit } from "./credit";
import { Episode } from "./episode";
import { Image } from "./image";
import { MediaAsset } from "./mediaasset";
import { Network } from "./network";
import { Person } from "./person";
import { Season } from "./season";
import { Series } from "./series";
export declare const ServerList: readonly ["https://art19.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    classification: Classification;
    classificationInclusion: ClassificationInclusion;
    credit: Credit;
    episode: Episode;
    image: Image;
    mediaAsset: MediaAsset;
    network: Network;
    person: Person;
    season: Season;
    series: Series;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
