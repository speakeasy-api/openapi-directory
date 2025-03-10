"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses


@dataclasses.dataclass
class ResponseHeadersPolicyAccessControlAllowHeaders:
    r"""<p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href=\\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers\\">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>"""
    
    items: list[str] = dataclasses.field()  
    quantity: int = dataclasses.field()  
    