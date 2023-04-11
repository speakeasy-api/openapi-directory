import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DealerAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find car dealers around
     *
     * @remarks
     * The dealers API returns a list of dealers around a given point and radius.
     */
    dealerSearch(req: operations.DealerSearchRequest, config?: AxiosRequestConfig): Promise<operations.DealerSearchResponse>;
    /**
     * Dealer by id
     *
     * @remarks
     * Get a particular dealer's information by its id
     */
    getDealer(req: operations.GetDealerRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerResponse>;
    /**
     * Dealer by id
     *
     * @remarks
     * Get a particular dealer's information by its id
     */
    getDealerCarUkId(req: operations.GetDealerCarUkIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerCarUkIdResponse>;
    /**
     * Dealer by id
     *
     * @remarks
     * Get a particular dealer's information by its id
     */
    getDealerHeavyEquipmentId(req: operations.GetDealerHeavyEquipmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerHeavyEquipmentIdResponse>;
    /**
     * Dealer by id
     *
     * @remarks
     * Get a particular dealer's information by its id
     */
    getDealerMotorcycleId(req: operations.GetDealerMotorcycleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerMotorcycleIdResponse>;
    /**
     * Dealer by id
     *
     * @remarks
     * Get a particular dealer's information by its id
     */
    getDealerRvId(req: operations.GetDealerRvIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerRvIdResponse>;
    /**
     * Find car dealers around
     *
     * @remarks
     * The dealers API returns a list of dealers around a given point and radius.
     */
    getDealersCarUk(req: operations.GetDealersCarUkRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersCarUkResponse>;
    /**
     * Find car dealers around
     *
     * @remarks
     * The dealers API returns a list of dealers around a given point and radius.
     */
    getDealersHeavyEquipment(req: operations.GetDealersHeavyEquipmentRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersHeavyEquipmentResponse>;
    /**
     * Find car dealers around
     *
     * @remarks
     * The dealers API returns a list of dealers around a given point and radius.
     */
    getDealersMotorcycle(req: operations.GetDealersMotorcycleRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersMotorcycleResponse>;
    /**
     * Find car dealers around
     *
     * @remarks
     * The dealers API returns a list of dealers around a given point and radius.
     */
    getDealersRv(req: operations.GetDealersRvRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersRvResponse>;
}
