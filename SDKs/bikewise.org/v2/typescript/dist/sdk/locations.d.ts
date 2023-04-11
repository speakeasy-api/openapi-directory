import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * GeoJSON response for matching incidents
 */
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Unpaginated geojson response
     *
     * @remarks
     * <p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>
     *
     * <pre><code>{
     *   type: "FeatureCollection",
     *   features: [
     *     {
     *       type: "Feature",
     *       properties: {
     *       id: 4474199,
     *       type: "Theft",
     *       occurred_at: 1428536937
     *     },
     *       geometry: {
     *       type: "Point",
     *       coordinates: [ -122.6244177, 45.5164386 ]
     *     }
     *   }
     * }
     * </code></pre>
     *
     * <p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>
     *
     * <p><strong>Go forth and make maps!</strong></p>
     *
     */
    getVersionLocationsFormat(req: operations.GETVersionLocationsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETVersionLocationsFormatResponse>;
    /**
     * Unpaginated geojson response with simplestyled markers
     *
     * @remarks
     * <p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>
     *
     * <p><strong>Go forth and make maps!</strong></p>
     *
     */
    getVersionLocationsMarkersFormat(req: operations.GETVersionLocationsMarkersFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETVersionLocationsMarkersFormatResponse>;
}
