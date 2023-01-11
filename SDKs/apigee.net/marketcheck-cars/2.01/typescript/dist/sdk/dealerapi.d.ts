import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DealerApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dealerSearch - Find car dealers around
     *
     * The dealers API returns a list of dealers around a given point and radius.
    **/
    dealerSearch(req: operations.DealerSearchRequest, config?: AxiosRequestConfig): Promise<operations.DealerSearchResponse>;
    /**
     * getDealer - Dealer by id
     *
     * Get a particular dealer's information by its id
    **/
    getDealer(req: operations.GetDealerRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerResponse>;
    /**
     * getDealerHeavyEquipmentId - Dealer by id
     *
     * Get a particular dealer's information by its id
    **/
    getDealerHeavyEquipmentId(req: operations.GetDealerHeavyEquipmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerHeavyEquipmentIdResponse>;
    /**
     * getDealerMotorcycleId - Dealer by id
     *
     * Get a particular dealer's information by its id
    **/
    getDealerMotorcycleId(req: operations.GetDealerMotorcycleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerMotorcycleIdResponse>;
    /**
     * getDealerRvId - Dealer by id
     *
     * Get a particular dealer's information by its id
    **/
    getDealerRvId(req: operations.GetDealerRvIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerRvIdResponse>;
    /**
     * getDealersHeavyEquipment - Find car dealers around
     *
     * The dealers API returns a list of dealers around a given point and radius.
    **/
    getDealersHeavyEquipment(req: operations.GetDealersHeavyEquipmentRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersHeavyEquipmentResponse>;
    /**
     * getDealersMotorcycle - Find car dealers around
     *
     * The dealers API returns a list of dealers around a given point and radius.
    **/
    getDealersMotorcycle(req: operations.GetDealersMotorcycleRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersMotorcycleResponse>;
    /**
     * getDealersRv - Find car dealers around
     *
     * The dealers API returns a list of dealers around a given point and radius.
    **/
    getDealersRv(req: operations.GetDealersRvRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersRvResponse>;
}
