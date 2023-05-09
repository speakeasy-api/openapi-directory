# SDK

## Overview

This API allows you to interact with Ethereum, Binance smart chain, Polygon and Tron blockchain. If you ever looked for a possibility to automate token or payments this is the right place.  
You still have no idea for real use cases? Let me give you some examples: Accept your own token as payment method for your shop, distribute airdrop tokens of your ICO, convert your site currency to a token that can be traded on exchanges and many more.  
There are a lot of use cases which are not only limited to sending tokens but also receiving them. You could even create a secure wallet for your token which only the wallet owner has access to. Additionally we offer a lot of functions for retrieving blockchain data, including transactions. Using our webhook system, it is possible to receive notifications when events on the blockchain occur, for example when a transfer to a specific address is happening.

# Registering

To use this Blockchain API, you need to register for a free account on [Chaingateway.io](https://chaingateway.io)

Once you have created your account, you can create an API key in your Account panel to use with our API.

# Postman

Postman is a great software to test APIs, it helped us a lot when developing this API. If you haven't installed it yet, we recommend to do so

We have created a Postman collection that allows to import all functions and their settings, including descriptions in Postman. This way you can test all functions with the click of a button (just change the parameters before).

# API Specifications

For many API clients, websites and development projects you may need a file which specifies all function endpoints of our API. These files can be found in our [Github repository](https://github.com/chaingateway/api-specification), always updated in the formats "Postman Collection" and "OPENAPI/SWAGGER".

# Authorization

You can get your personal API Key from your account dashboard. It is used by us to determine who is accessing the API and to count the requests by that account. There are 2 possibilities to use it in your requests:

Add it in the HTTP header as

`Authorization: q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m`

Please do not share your api key! If you did so by mistake, immediately regenerate it in your account panel!

### Available Operations

