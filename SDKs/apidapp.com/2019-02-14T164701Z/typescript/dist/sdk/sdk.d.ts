import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://ethereum.apidapp.com/1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    deleteKeyKey(req: operations.DeleteKeyKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeyKeyResponse>;
    /**
     * Get account balance
     */
    getAccountId(req: operations.GetAccountIdRequest, security: operations.GetAccountIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountIdResponse>;
    /**
     * Access detailed block information
     */
    getBlock(config?: AxiosRequestConfig): Promise<operations.GetBlockResponse>;
    /**
     * Get information about particular block
     */
    getBlockId(req: operations.GetBlockIdRequest, security: operations.GetBlockIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetBlockIdResponse>;
    /**
     * Get transaction count within block
     */
    getBlockIdTransaction(req: operations.GetBlockIdTransactionRequest, security: operations.GetBlockIdTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.GetBlockIdTransactionResponse>;
    /**
     * Get information about particular transaction within block
     */
    getBlockIdTransactionIndex(req: operations.GetBlockIdTransactionIndexRequest, security: operations.GetBlockIdTransactionIndexSecurity, config?: AxiosRequestConfig): Promise<operations.GetBlockIdTransactionIndexResponse>;
    /**
     * Get a list of supported blockchains
     */
    getBlockchain(config?: AxiosRequestConfig): Promise<operations.GetBlockchainResponse>;
    /**
     * Get information about blockchain woth given id
     */
    getBlockchainId(req: operations.GetBlockchainIdRequest, security: operations.GetBlockchainIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetBlockchainIdResponse>;
    /**
     * Get contract balance
     */
    getContractId(req: operations.GetContractIdRequest, security: operations.GetContractIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetContractIdResponse>;
    /**
     * Get token information such as name, total amount in circulation, etc
     */
    getErc20(config?: AxiosRequestConfig): Promise<operations.GetErc20Response>;
    /**
     * Get information amout token balance in the account
     */
    getErc20Address(req: operations.GetErc20AddressRequest, config?: AxiosRequestConfig): Promise<operations.GetErc20AddressResponse>;
    getKey(req: operations.GetKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetKeyResponse>;
    /**
     * Get information about transaction by the transaction hash value
     */
    getTransactionHash(req: operations.GetTransactionHashRequest, security: operations.GetTransactionHashSecurity, config?: AxiosRequestConfig): Promise<operations.GetTransactionHashResponse>;
    /**
     * Get receipt detail information
     */
    getTransactionHashReceipt(req: operations.GetTransactionHashReceiptRequest, security: operations.GetTransactionHashReceiptSecurity, config?: AxiosRequestConfig): Promise<operations.GetTransactionHashReceiptResponse>;
    /**
     * Get API version info
     */
    getVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * Get current account balance
     */
    getWallet(config?: AxiosRequestConfig): Promise<operations.GetWalletResponse>;
    getWalletAccount(config?: AxiosRequestConfig): Promise<operations.GetWalletAccountResponse>;
    /**
     * Get account balance
     */
    getWalletAccountId(req: operations.GetWalletAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWalletAccountIdResponse>;
    options(config?: AxiosRequestConfig): Promise<operations.OptionsResponse>;
    optionsAccount(config?: AxiosRequestConfig): Promise<operations.OptionsAccountResponse>;
    optionsAccountId(req: operations.OptionsAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsAccountIdResponse>;
    optionsBlock(config?: AxiosRequestConfig): Promise<operations.OptionsBlockResponse>;
    optionsBlockId(req: operations.OptionsBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsBlockIdResponse>;
    optionsBlockIdTransaction(req: operations.OptionsBlockIdTransactionRequest, config?: AxiosRequestConfig): Promise<operations.OptionsBlockIdTransactionResponse>;
    optionsBlockIdTransactionIndex(req: operations.OptionsBlockIdTransactionIndexRequest, config?: AxiosRequestConfig): Promise<operations.OptionsBlockIdTransactionIndexResponse>;
    optionsBlockchain(config?: AxiosRequestConfig): Promise<operations.OptionsBlockchainResponse>;
    optionsBlockchainId(req: operations.OptionsBlockchainIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsBlockchainIdResponse>;
    optionsContract(config?: AxiosRequestConfig): Promise<operations.OptionsContractResponse>;
    optionsContractId(req: operations.OptionsContractIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsContractIdResponse>;
    optionsEcho(config?: AxiosRequestConfig): Promise<operations.OptionsEchoResponse>;
    optionsErc20(config?: AxiosRequestConfig): Promise<operations.OptionsErc20Response>;
    optionsErc20Address(req: operations.OptionsErc20AddressRequest, config?: AxiosRequestConfig): Promise<operations.OptionsErc20AddressResponse>;
    optionsKey(config?: AxiosRequestConfig): Promise<operations.OptionsKeyResponse>;
    optionsKeyKey(req: operations.OptionsKeyKeyRequest, config?: AxiosRequestConfig): Promise<operations.OptionsKeyKeyResponse>;
    optionsTransaction(config?: AxiosRequestConfig): Promise<operations.OptionsTransactionResponse>;
    optionsTransactionHash(req: operations.OptionsTransactionHashRequest, config?: AxiosRequestConfig): Promise<operations.OptionsTransactionHashResponse>;
    optionsTransactionHashReceipt(req: operations.OptionsTransactionHashReceiptRequest, config?: AxiosRequestConfig): Promise<operations.OptionsTransactionHashReceiptResponse>;
    optionsVersion(config?: AxiosRequestConfig): Promise<operations.OptionsVersionResponse>;
    optionsWallet(config?: AxiosRequestConfig): Promise<operations.OptionsWalletResponse>;
    optionsWalletAccount(config?: AxiosRequestConfig): Promise<operations.OptionsWalletAccountResponse>;
    optionsWalletAccountId(req: operations.OptionsWalletAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsWalletAccountIdResponse>;
    optionsWalletAccountIdPay(req: operations.OptionsWalletAccountIdPayRequest, config?: AxiosRequestConfig): Promise<operations.OptionsWalletAccountIdPayResponse>;
    /**
     * Create new account
     */
    postAccount(config?: AxiosRequestConfig): Promise<operations.PostAccountResponse>;
    /**
     * Create a new smart contract
     */
    postContract(config?: AxiosRequestConfig): Promise<operations.PostContractResponse>;
    /**
     * Call the contract
     */
    postContractId(req: operations.PostContractIdRequest, security: operations.PostContractIdSecurity, config?: AxiosRequestConfig): Promise<operations.PostContractIdResponse>;
    postErc20(config?: AxiosRequestConfig): Promise<operations.PostErc20Response>;
    /**
     * Transfer tokens to another account
     */
    postErc20Address(req: operations.PostErc20AddressRequest, config?: AxiosRequestConfig): Promise<operations.PostErc20AddressResponse>;
    postKey(config?: AxiosRequestConfig): Promise<operations.PostKeyResponse>;
    /**
     * Create a new transaction. Transfer Ether between accounts
     */
    postTransaction(config?: AxiosRequestConfig): Promise<operations.PostTransactionResponse>;
    /**
     * Create personal wallet
     */
    postWallet(config?: AxiosRequestConfig): Promise<operations.PostWalletResponse>;
    postWalletAccount(config?: AxiosRequestConfig): Promise<operations.PostWalletAccountResponse>;
    postWalletAccountIdContract(req: operations.PostWalletAccountIdContractRequest, config?: AxiosRequestConfig): Promise<operations.PostWalletAccountIdContractResponse>;
    postWalletAccountIdErc20(req: operations.PostWalletAccountIdErc20Request, config?: AxiosRequestConfig): Promise<operations.PostWalletAccountIdErc20Response>;
    /**
     * Send payment from the account held within the wallet
     */
    postWalletAccountIdPay(req: operations.PostWalletAccountIdPayRequest, config?: AxiosRequestConfig): Promise<operations.PostWalletAccountIdPayResponse>;
}
